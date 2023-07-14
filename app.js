const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('./index.html', null, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    if (req.method === 'GET' && req.url === '/main.js') {
        fs.readFile('./dist/main.js', null, (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(5020, () => {
    console.log('포트 5020으로 서버가 실행되었습니다.');
});
