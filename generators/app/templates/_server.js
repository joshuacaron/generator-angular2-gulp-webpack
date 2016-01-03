var express = require('express');

var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/src'));

app.listen(3000);
console.log('Listening on port 3000.');
