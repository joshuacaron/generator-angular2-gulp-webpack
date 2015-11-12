var express = require('express')
var app = express()

app.use('/node_modules', express.static('node_modules'))
app.use('/', express.static('src'))

app.listen(3000)
console.log('Listening on port 3000.')
