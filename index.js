const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded());

app.get('/', (req, res) => {
    let name = req.query.name ?? 'Kaspar';
    let age = req.query.age ?? 'Unknown';
    res.render('index.njk', {name, age});
});

app.post('/test', (req, res) => {
    res.json(req.body);   
});

app.use(require('./src/controllers/ArticlesController'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});