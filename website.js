const http = require('node:http');
const fs = require('node:fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200; //okay
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200; //okay
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } 

    else if(req.url == '/about'){
        res.statusCode = 200; //okay
        res.end('<h1> About TSdebug </h1> <p> Hey this is about TSdebug ! </p>');
    } 

    else if(req.url == '/tsd'){
        res.statusCode = 200; //okay
        res.end('<h1> This is TSdebug </h1> <p> Hey this is the way to rock the world ! </p>');
    }

    else{
        // res.tsdebug(); //crashes server
        res.statusCode = 404; //page not found
        res.end('<h1> Not Found </h1> <p> Hey this page was not found on this server ! </p>');
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
