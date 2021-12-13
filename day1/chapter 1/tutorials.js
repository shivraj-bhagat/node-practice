const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class someMathObject {
    constructor() {
        console.log('Object Created');
    }
}

module.exports = { sum, PI, someMathObject }

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.someMathObject = someMathObject;