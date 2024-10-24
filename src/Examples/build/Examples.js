"use strict";
// interface Animal {
//   name: string;
// }
//
// interface Cat extends Animal {
//   meow(): any;
// }
//
// function isCat(a: Animal): a is Cat {
//   return true
// }
//
// var x: Animal;
// x= {name: 'Haha'}
// if(isCat(x)){
//   x.meow()
//   console.log('HAHAH')
// }
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'concat') {
        return a + b + '';
    }
};
let myVal = addOrConcat(2, 2, 'concat');
