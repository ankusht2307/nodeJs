
/**
 * creatng server with core node modules
 */
const http = require('http');
const fs = require('fs');


const server = http.createServer(function (req, res) {
    // accesing and logging values from request object
    console.log(req.url, req.headers, req.method);

    // setting routes
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end;
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Nodejs Page</title></html>');
    res.write('<body>hello from Nodejs Server</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);