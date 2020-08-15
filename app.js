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

app.get('/dynamic', function (req, res){
    var lis = '';
    for (var i = 0; i < 100; i++){
        lis += '<li>coding' + (i + 1 ) + '</li>'
    }

    const output = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="intro.css">
    <title>HAHA</title>
</head>
<body>
    <center>
        <h1 style="font-size: 10em">👋</h1>
        <h1>#로컬 #서버 #개발기 #코더혹은레독 #이페이지는동적</h1>
        <p>C/C++, Python, Swift개발자가 Node.js를 만난다면?</p>
        <h2>푸쿠쾅왕앙아앙</h1>
        <p>주의! 폭발 가능성 ∞%</p>

        ${lis}

        <button onclick="window.location.href = 'login'">이거 가짜 로그인인거 다들 아시져?</button>
    </center>
</body>
</html>
    `;
    res.send(output);
})

app.listen(port, function (){   // connect callback
    console.log('connected ' + port + ' port');
});