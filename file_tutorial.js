const fs = require('fs');

// sync
var dataSync = fs.readFileSync("data.txt", {encoding: "utf-8"});
console.log(dataSync);

// async
fs.readFile("data.txt", {encoding: "utf-8"}, function(err, data){
    console.log(data)
})