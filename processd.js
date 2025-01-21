//argv

console.log(process.argv);
console.log(process.argv[2]);


//process.env

console.log(process.env.LOGNAME);

// pid - node id

console.log(process.pid);


// cwd = working dir

console.log(process.cwd());

// title - title of node proc

console.log(process.title);

//memoryUsage

console.log(process.memoryUsage());

// uptime() - script execute time

console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

// exit
process.exit(0);
console.log('Hello from after exit');

