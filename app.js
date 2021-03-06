var express    = require('express');
var path       = require('path');
var http       = require('http');
var https      = require('https');
var app        = express();

var proxy      = require('express-http-proxy');

app.use('/lib', express.static('lib'));
app.use('/src', express.static('src'));

app.get('/', function( req, res ){
  res.sendFile( path.join( __dirname + "/index.html" ) );
});

app.get('/image', function( req, res ){
  res.sendFile( path.join( __dirname + "/image.html" ) );
});

app.use('/api', proxy('http://hackerearth.0x10.info', {
  reqBodyEncoding: null,
  forwardPath: function(req, res) {
    return '/api'+require('url').parse(req.url).path;
  }
}));

// app.listen( 7070, function(){
//   console.log("Server is listening on Port 7070!!!");
// });

// http.createServer(function( req, res ){
//   console.log('Express server listening on %d, in %s mode', 7070, app.get('env'));
//   //res.sendFile( path.join( __dirname + "/index.html" ) );
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end("<h1>Hello World</h1>")
// })
app.listen(process.env.PORT || 7070)