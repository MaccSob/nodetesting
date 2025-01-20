import fs from 'fs/promises';

//readfile - callback
//fs.readFile('./test.txt', 'utf8', (err, data) => {
  ///  if (err) throw err;
    //console.log(data);
//});

//Filesync - synchronous 
//const data = fs.readFileSync('./test.txt', 'utf8');
//console.log(data);

// readfile - promise.then();

//fs.readFile('./test.txt', 'utf8')
  //  .then((data) => console.log(data))
    // .catch((err) => console.log(err));


// readfile - asynchronous

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// writeFile() 

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Testing the test');
    console.log('File written to:');
  } catch (error) {
    console.log(error);
  }
};

// appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\n This is appended text');
    console.log('File appended to...');
  } catch (error) {
    console.log(error);
  }
}


writeFile();
appendFile();
readFile();