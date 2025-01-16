import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';
const PORT = process.env.PORT;



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {






    try {
        // if get request
        if (req.method ='GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
           
               } else if(req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
               } else {
                   throw new Error('Not found');
               }
               const data = await fs.readFile(filePath);
               res.setHeader('Content-type', 'text/html');
               res.write(data);
               res.end();
                    } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end("<h2>Server error</h2>");
    }



    
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});