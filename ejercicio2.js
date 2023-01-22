var http = require('http');
var url = require('url');

http.createServer(function(req, res){
   
    var q = url.parse(req.url, true);
    var datos = q.query;

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = parseFloat(datos.num) * 2;
    res.write("El numero multiplicado por 2 es:  " + result);
    res.write('<br>');
    result = parseFloat(datos.num)*3;
    res.write("El numero multiplicado por 3 es:  " + result);


    res.end();
}).listen(8080);

