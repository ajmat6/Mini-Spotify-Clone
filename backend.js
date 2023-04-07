const http = require('http');
const fs = require('fs');
// const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 80;

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('About.html');

const server = http.createServer((req,res) => {
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-type','text/html');

    if(url == '/')
    {
        res.end(home);
    }

    else if(url == '/about')
    {
        res.end(about);
    }

    else
    {
        statusCode = 404;
        res.end("<h1> 404 NOT FOUND </h1>");
    }
});

server.listen(port , hostname , () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});