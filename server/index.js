const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('port', process.env.PORT || 9001);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/related-products', (req, res) => {
  res.json({});
});

app.listen(app.get('port'), () => {
  console.log(`Server running on ${app.get('port')}`);
});