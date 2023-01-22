var http = require('http');
var url = require('url');

http.createServer(function(req, res){
   
    var q = url.parse(req.url, true);
    var datos = q.query;

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = datos.user;
    res.write("Bienvenido a este sitio " + result);

    res.end();
}).listen(8080);

