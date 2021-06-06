
var express = require('express');
var app = express();

// define routes here..

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});





// var http = require('http');
// var dt = require('./guess');
// const visited = "hiiii";
// http.createServer(function (req, res) {
//     res.writeHead(200,
//         { 'Content-Type': 'text/html' });
//     console.log("here......")
//     //  res.write("The date and time are currently: " + dt.guess());
//     res.render("parks", { visited: visited })
//     // res.write("<!DOCTYPE html>");
//     // res.write("<html>");
//     // res.write("<head><meta charset=\"utf-8\"/>");
//     // res.write("<title>Calculator Web Site</title>");
//     // res.write("</head>");
//     // res.write("<body>");
//     // res.write("<p>The sum is: ");
//     // res.write(dt.guess());
//     // res.write("</p>");
//     // res.write("</body>");
//     // res.write("</html>");
//     // res.end();
// }).listen(8080);
// port = 8080;
// console.log("i am listning at port" + port)