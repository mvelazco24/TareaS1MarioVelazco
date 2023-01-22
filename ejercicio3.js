var http = require('http');
var url = require('url');

http.createServer(function(req, res){
   
    var q = url.parse(req.url, true);
    var datos = q.query;

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = parseFloat(datos.num1) * parseFloat(datos.num2);
    res.write("El resultado de la multiplicacion:  " + result);
    res.write('<br>');
    result = parseFloat(datos.num1) / parseFloat(datos.num2);
    res.write("El resultado de la division es:  " + result);


    res.end();
}).listen(8080);

