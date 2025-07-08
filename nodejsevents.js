const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Turn off the motor!');
  setTimeout(() =>{
    console.log('Please turn off the motor, its a gental reminder.');
  }, 3000);
});

myEmitter.emit('WaterFull'); //the trigger for the code to run

