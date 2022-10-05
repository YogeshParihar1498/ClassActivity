var express = require('express')

var app = express()

const SERVER_PORT = 3002
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded()) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Hola!!</h1>");
    res.end();
})

app.get('/function', function (req, res) {
    res.send("<h1>How Are YOU!!</h1>");
    res.end();
})

app.get('/go', function (req, res) {
    res.send("<h1>Let's Code</h1>");
    res.end();
})
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})