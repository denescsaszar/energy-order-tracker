const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/orders.json');

const readOrders = () => {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

const writeOrders = (orders) => {
  fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));
};

// GET all orders
router.get('/', (req, res) => {
  const orders = readOrders();
  const { status } = req.query;
  if (status) {
    return res.json(orders.filter(o => o.status === status));
  }
  res.json(orders);
});

// GET single order
router.get('/:id', (req, res) => {
  const orders = readOrders();
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Auftrag nicht gefunden' });
  res.json(order);
});

// POST new order
router.post('/', (req, res) => {
  const orders = readOrders();
  const { customer, product, volume_kwh } = req.body;
  if (!customer || !product || !volume_kwh) {
    return res.status(400).json({ error: 'Pflichtfelder fehlen: customer, product, volume_kwh' });
  }
  const newOrder = {
    id: String(orders.length + 1).padStart(3, '0'),
    customer,
    product,
    volume_kwh,
    status: 'offen',
    created_at: new Date().toISOString().split('T')[0],
    updated_at: new Date().toISOString().split('T')[0],
    history: [{ status: 'offen', timestamp: new Date().toISOString() }]
  };
  orders.push(newOrder);
  writeOrders(orders);
  res.status(201).json(newOrder);
});

// PATCH update status
router.patch('/:id/status', (req, res) => {
  const orders = readOrders();
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Auftrag nicht gefunden' });
  const { status } = req.body;
  const validStatuses = ['offen', 'in_verhandlung', 'abgeschlossen', 'verloren'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Ungültiger Status' });
  }
  order.status = status;
  order.updated_at = new Date().toISOString().split('T')[0];
  order.history.push({ status, timestamp: new Date().toISOString() });
  writeOrders(orders);
  res.json(order);
});

module.exports = router;
