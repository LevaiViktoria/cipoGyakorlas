const http = require('http');
const fs = require('fs');
const static = require ('node-static');
const port = 4444;
const kep = new(static.Server)('./images');

const server = http.createServer((req,res) =>{
    req.addListener('end', function (){
        kep.serve(req, res)
    }).resume()
    

    console.log(req.url);
    console.log(req.method);
    console.log("----");

   switch (true){
       case req.url === "/" && req.method === "GET":
           fs.readFile('./views/index.html', (err, data) =>{
               res.setHeader('content-type', 'text/html; charset=UTF-8');
               res.writeHead(200);
               res.end(data);
           });
           break;
        case req.url === "/favicon.ico" && req.method === "GET":
           fs.readFile('./favicon.ico', (err, data) =>{
               res.setHeader('content-type', 'image/ico');
               res.writeHead(200);
               res.end(data);
           });
           break;
           case req.url === "/script.js" && req.method === "GET":
            fs.readFile('./public/script.js', (err, data) =>{
                res.setHeader('content-type', 'application/javascript');
                res.writeHead(200);
                res.end(data);
            });
            break;
            
            case req.url === "/adatok.json" && req.method === "GET":
            fs.readFile('./data/adatok.json', (err, data) =>{
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(data);
            });
            break;
            
            default:
                res.setHeader('content-type', 'text/html');
                res.writeHead(404);
                res.end("404-es hiba. Oldal nem található");
   }

});

server.listen(port);
