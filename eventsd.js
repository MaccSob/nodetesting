import {EventEmitter} from 'events';


const myEmitter = new EventEmitter();


function greetHandler(name) {
    console.log('Fresh avocados' + name );
}


function goodbyeHandler(name) {
    console.log('Rotten tomatoes' + name);
}


// Register event listeners

myEmitter.on('greet', greetHandler);

myEmitter.on('goodbye', goodbyeHandler);



// Emit events

myEmitter.emit('greet', 'Jason');
myEmitter.emit('goodbye', 'Jason');

// Error handling

myEmitter.on('error', (err) => {
    console.log('An Error Occured', err);
})

// Simulate error

myEmitter.emit('error', new Error('Something went wrong'));
