const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});