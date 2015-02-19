var http = require('http'),
    fs   = require('fs'),
    express = require('express'),
    app = express(),
    tw = require('tw.js');

function sendLyric() {
  var random = Math.floor(Math.random()*4);
  return JSON.stringify(tw[random]);
};

app.get('/', function(req, res){
  res.send(sendLyric());
});

app.set('port', (process.env.PORT || 9000));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port)
});