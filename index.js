const http = require('http');
const fs = require('fs');
const port = 4444;


const server = http.createServer((req,res) =>{
   
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
        
        case req.url === "/adatok/adatok.json" && req.method === "GET":
            fs.readFile('./data/adatok.json', (err, data) =>{
                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/images/ferficipo.jpg" && req.method === "GET":
            fs.readFile('./images/ferficipo.jpg', (err, data) =>{
                res.setHeader('content-type', 'image/jpg');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/images/noicipo.jpg" && req.method === "GET":
            fs.readFile('./images/noicipo.jpg', (err, data) =>{
                res.setHeader('content-type', 'image/jpg');
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
