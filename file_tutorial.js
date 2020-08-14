const fs = require('fs');

// Sync
var dataSync = fs.readFileSync("data.txt", {encoding: "utf-8"});
console.log(dataSync);

// Async
fs.readFile("data.txt", {encoding: "utf-8"}, function(err, data){
    console.log(data)
})