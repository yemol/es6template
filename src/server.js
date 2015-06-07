var app = require('express')();
var bodyParser = require('body-parser');

import Foo from './foo.js';

let foo = new Foo();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.json({hello: 'Hello world'});
});

app.get('/test', (req, res) => {
  res.json({hello: foo.doSomething()});
});

app.listen(8080);
console.log('server started on port 8080');
