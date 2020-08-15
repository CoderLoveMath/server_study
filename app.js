const express = require('express');
const fs = require('fs');
var app = express();

const port = 8000;

app.use(express.static('page'));
// app.get() is router, and it does routing

app.get('/', function (req, res){ // main callback (req: request, res: response)
    const html = fs.readFileSync('main.html', {encoding: 'utf-8'})
    res.send(html)
});

app.get('/login', function (req, res){  // login page
    const html = fs.readFileSync('login.html', {encoding: 'utf-8'})
    res.send(html)
})

app.listen(port, function (){   // connect callback
    console.log('connected ' + port + ' port');
});