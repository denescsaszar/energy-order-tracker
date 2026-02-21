const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const ordersRouter = require("./routes/orders");
app.use("/api/orders", ordersRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`Energy Order Tracker läuft auf http://localhost:${PORT}`);
});
