const express = require('express');
const router = express.Router();
const db = require('../db/portfolio');
const axios = require('axios');

const API_KEY = 'VX7E211SWGQDF65C'; // Replace with your free Alpha Vantage API key
const BASE_URL = 'https://www.alphavantage.co/query';

router.post('/add-stock', async (req, res) => {
  const { symbol, quantity } = req.body;
  if (!symbol || !quantity || quantity <= 0) {
    return res.status(400).json({ error: 'Valid symbol and quantity are required' });
  }
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol.toUpperCase(),
        apikey: API_KEY
      }
    });
    const quote = response.data['Global Quote'];
    if (!quote || !quote['05. price']) {
      return res.status(404).json({ error: 'Stock data not found' });
    }
    const price = parseFloat(quote['05. price']);
    const newStock = db.addStock({ symbol: symbol.toUpperCase(), quantity, price });
    res.json(newStock);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

router.get('/portfolio', (req, res) => {
  res.json(db.getPortfolio());
});

router.post('/remove-stock', (req, res) => {
  const { id } = req.body;
  const result = db.removeStock(id);
  if (result) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Stock not found' });
  }
});

module.exports = router;