import fs from 'fs';

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

readFile();