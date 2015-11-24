var http = require('http'),
    fs   = require('fs'),
    express = require('express'),
    app = express(),
    tw = require('tw');

function sendLyric() {
  var random = Math.floor(Math.random() * (tw.length));
  return tw[random];
};

app.get('/', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.send(sendLyric());
});

app.set('port', (process.env.PORT || 9000));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port)
});