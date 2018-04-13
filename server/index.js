const express = require('express');
const path = require('path');
const Product = require('./db/Product');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('port', process.env.PORT || 9001);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/products/:id/related', (req, res) => {
  Product.findOne({ id: Number(req.params.id) }).then((result, err) => {
    const category = result.category;
    Product.find({ category }).then((results) => {
      res.json(results);
    });
  }).catch((err) => {
    console.log(err);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Server running on ${app.get('port')}`);
});