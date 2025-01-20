import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';


// basename() - shows only file
console.log(path.basename(filePath));

///dirname() -shows all dirs

console.log(path.dirname(filePath));

// extname(); - shows .txt 
console.log(path.extname(filePath));

//parse(); - shows obj tree

console.log(path.parse(filePath));

// without Common.js 

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join(), // resolve(); 

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);