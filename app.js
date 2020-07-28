const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('second middleware');
    res.send('<h1>Hello from Express middleware!</h1>');
});

const server = http.createServer(app);

server.listen(4000, () => {
    console.log('Listening on 4000');
});