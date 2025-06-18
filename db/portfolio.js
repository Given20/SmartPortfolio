const portfolio = [];

function addStock(stock) {
  const newStock = {
    id: portfolio.length + 1,
    symbol: stock.symbol,
    quantity: stock.quantity,
    initialPrice: stock.price,
    currentPrice: stock.price,
    dateAdded: new Date().toISOString()
  };
  portfolio.push(newStock);
  return newStock;
}

function getPortfolio() {
  return portfolio;
}

function removeStock(id) {
  const index = portfolio.findIndex(s => s.id === id);
  if (index !== -1) {
    portfolio.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = { addStock, getPortfolio, removeStock };