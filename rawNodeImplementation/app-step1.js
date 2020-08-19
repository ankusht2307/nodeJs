
/**
 * creatng server with core node modules
 */
const http = require('http');


const server = http.createServer(function (req, res) {
    // accesing and logging values from request object
    console.log(req.url, req.headers, req.method);

    // creating a response

    // setting header on the response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Nodejs Page</title></html>');
    res.write('<body>hello from Nodejs Server</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);