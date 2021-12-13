const tutorials = require('./tutorials');
console.log(tutorials.sum(1,1))
console.log(tutorials.PI)
console.log(new tutorials.someMathObject())

// Event Module and event emitter
const Eventemitter = require('events');
const eventEmiitter = new Eventemitter();

eventEmiitter.on('tutorials', (sum1, sum2) => {
    console.log('tutorial event has occured!');
    console.log(sum1+sum2);
})

eventEmiitter.emit('tutorials',2,1);

class Person extends Eventemitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let shiv = new Person('SHIV');
let ajeet = new Person('AJEET');
ajeet.on('name', () => {
    console.log('my name is ' + ajeet.name);
})
shiv.on('name', () => {
    console.log('my name is ' + shiv.name);
})

shiv.emit('name');
ajeet.emit('name');