var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
     
    var query = require('url').parse(req.url,true).query;
    if(req.method === "GET"){
        var email = query.email;
       
        res.writeHead(200, {'Content-Type': 'text/plain'});
        console.log(query);
        if(email == 'juyagu@gmail.com'){
            res.end('existe');          
        } else {
            res.end('no existe');
        }
    }
    if(req.method === "POST"){
        
        req.on('data',function(data){
            var idSuper = data.toString();
            var cadena = "";
            if(idSuper === "1"){
                cadena = '<li class="list-group-item">Superman</li>'+
                        '<li class="list-group-item">Batman</li>'+
                        '<li class="list-group-item">Aquaman</li>' +
                        '<li class="list-group-item">Mujer Maravilla</li>';
            } else if(idSuper === "2"){
                cadena = '<li class="list-group-item">Wolverine</li>' +
                        '<li class="list-group-item">Profesor Xavier</li>' +
                        '<li class="list-group-item">Magneto</li>';                        
            } else if(idSuper === "3"){
                cadena = '<li class="list-group-item">Iron Man</li>' +
                        '<li class="list-group-item">Thor</li>'+
                        '<li class="list-group-item">Hulk</li>';
            } else {
                cadena = '<li class="list-group-item">No hay superheroes disponibles</li>';
            }
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(cadena);
        });
    }
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
