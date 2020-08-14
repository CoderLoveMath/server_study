const express = require('express');
const fs = require('fs');
var app = express();

const port = 8000


app.get('/', function (req, res){ // main callback (req: request, res: response)
    const html = fs.readFileSync('main.html', {encoding: 'utf-8'})
    res.send(html)
});

app.listen(port, function (){   // connect callback
    console.log('connected ' + port + ' port');
});