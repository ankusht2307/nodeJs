
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
        const body = [];

        // adding data event on request to get data 
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        // adding 'end' event which gets called when data chunks are finished loading
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })

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