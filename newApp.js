const http = require('http');
//to make it return an html file
const fs = require('fs');

const port = 8084;
const host = 'localhost';
const server = http.createServer((req, res) => {
    //console.log('method', req.method);
    console.log('url', req.url);
    //console.log('headers', req.headers);
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/html');

    let path = './';
    if(req.url === '/'){
        path = path + 'index.html';
    }
    else if(req.url === '/index.html'){
        path = path + 'index.html';
    }
    else if(req.url === '/style.css'){
        path = path + 'style.css';
    }
    else if(req.url === '/Img/Portrait.png'){
        path = path + '/Img/Portrait.png';
    }
    else if(req.url === '/Img/calcApp.png'){
        path = path + '/Img/calcApp.png';
    }
    else if(req.url === '/Img/pokemon.png'){
        path = path + '/Img/pokemon.png';
    }
    else if(req.url === '/Img/jibber.png'){
        path = path + '/Img/jibber.png';
    }
    else if(req.url === '/Img/covid.png'){
        path = path + '/Img/covid.png';
    }
    else if(req.url === '/Img/portfolio.png'){
        path = path + '/Img/portfolio.png';
    }
    else if(req.url === '/Img/spudZone.png'){
        path = path + '/Img/spudZone.png';
    }
    else if(req.url === '/Img/linkedin.png'){
        path = path + '/Img/linkedin.png';
    }
    else if(req.url === '/Img/github.png'){
        path = path + '/Img/github.png';
    }
    else if(req.url === '/past.html'){
        path = path + 'past.html';
    }
    else if(req.url === '/current.html'){
        path = path + 'current.html';
    }
    else if(req.url === '/connect.html'){
        path = path + 'connect.html'
    }
    else{
        res.statusCode = 404;
        console.log('404 Not Found');
    }
    fs.readFile(path, (err, html) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(html);
            res.end();
        }
    });
    //res.write('Hello');
    //res.end();
});

//server.on('request', (req, res) => {
//}); this is one way to do it or you can add it when you create the server like above

server.listen(port, host, () => {
    console.log('The server is running on port', port);
});