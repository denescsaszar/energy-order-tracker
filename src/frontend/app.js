const API = "/api/orders";
let currentFilter = "all";

async function fetchOrders() {
  const url = currentFilter === "all" ? API : `${API}?status=${currentFilter}`;
  const res = await fetch(url);
  return await res.json();
}

function statusLabel(status) {
  const labels = {
    offen: "Offen",
    in_verhandlung: "In Verhandlung",
    abgeschlossen: "Abgeschlossen",
    verloren: "Verloren",
  };
  return labels[status] || status;
}

async function renderOrders() {
  const orders = await fetchOrders();
  const list = document.getElementById("order-list");
  if (orders.length === 0) {
    list.innerHTML = '<p style="color:#999">Keine Aufträge gefunden.</p>';
    return;
  }
  list.innerHTML = orders
    .map(
      (o) => `
    <div class="order-card">
      <div class="order-info">
        <h3>${o.customer}</h3>
        <p>${o.product} · ${o.volume_kwh.toLocaleString()} kWh · aktualisiert: ${o.updated_at}</p>
      </div>
      <span class="status-badge status-${o.status}">${statusLabel(o.status)}</span>
    </div>
  `,
    )
    .join("");
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.status;
    renderOrders();
  });
});

document.getElementById("order-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = {
    customer: document.getElementById("customer").value,
    product: document.getElementById("product").value,
    volume_kwh: parseInt(document.getElementById("volume").value),
  };
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  e.target.reset();
  renderOrders();
});

renderOrders();
