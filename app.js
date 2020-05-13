const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/person/:id', (req, res) => {
    res.render('person', {
        id: req.params.id,
        qstr: req.query.qstr
    });
});

app.post('/person', urlencodedParser, (req, res) => {
    res.send("Gracias");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personJson', jsonParser, (req, res) => {
    res.send('Thanks from jsonParser');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/', (req, res) => {
    res.render('personData');
});

app.listen(3000, () => console.log('gg'));

/*cosas

app.get('/', (req, res) => {
    //res.send("hola");
    res.render('index', {items: ['uno','dos','tres']});
});

res.send(`<html>
                <head>
                    <title>Page Title</title>
                    <link rel="stylesheet" type="text/css" href="/assets/style.css">
                </head>
                <body>
                    <h1>Id: ${req.params.id}</h1>
                    <p>Hola xd.</p>
                </body>
            </html>`);

*/