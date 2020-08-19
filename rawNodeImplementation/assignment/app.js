const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment 01</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    } else if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 01</title></head>');
        res.write('<body><ul><li>User 1 </li><li> User 2 </li></ul></body>');
        res.write('</html>');
        res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (data) => {
            body.push(data);
        })

        req.on('end', () => {
            console.log(Buffer.concat(body).toString());
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 01</title></head>');
    res.write('<body><h2>hallo</h2></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('server started');
});