import { createServer } from 'http';
import { createReadStream } from 'fs';

const server = createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    createReadStream('index.html').pipe(res);
});

server.listen(process.env.PORT || 3000);