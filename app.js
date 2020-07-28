const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express middleware!</h1>');
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});