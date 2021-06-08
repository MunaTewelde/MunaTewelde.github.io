// var http = require("http");
// const { URL } = require("url");
// var fs = require("fs");
// var mysql = require('mysql');

// var output = require("./word");
// http
//     .createServer(function (req, res) {
//         var q = new URL(req.url, "https://localhost:8085/");
//         output.findWord(req, res, q.searchParams);

//     })
//     .listen(8085);




// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

// app.post('/submit-data', function (req, res) {
//     res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });




var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('dict.html');
});

app.post('/submit-student-data', function (req, res) {
    var terms = req.body.word;

    res.send(terms + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..new');
});