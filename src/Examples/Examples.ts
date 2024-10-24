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

// var func = f => {
//   this.x = 'x'
// }

// let c = ((a,b) => ++a)(1, 2)
// console.log(c)


// function some(arg1: string | number | boolean): string | number | boolean {
//   if(typeof arg1 === "string"){
//     return arg1 + 'Hello';
//   }
//   if(typeof arg1 === "number"){
//     return arg1 + 10;
//   }
//   if(typeof arg1 === "boolean"){
//     return arg1 && false;
//   }
// }

// var x: any = 'Tim'
// if(typeof x === 'string'){
//   console.log(x.length)
// }
// x.unknown()

//
// function pickCard(x: { suit: string, card: number }[]): number
// function pickCard(x: number): { suit: string, card: number }
// function pickCard(x: string | number | any[]): any{
//   if(typeof x === 'object'){
//     var pickedCard = Math.floor(Math.random() * x.length)
//     return pickedCard
//   }
//   else if(typeof x === 'number'){
//     var pickedSuit = Math.floor(x/13);
//     return {
//       suit: 'a', card: x % 13
//     }
//   }
// }


// let myType = '8' as number
// console.log(typeof myType);

type One = string
type Two = string | number
type Three = 'hello'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat') : number|string => {
  if(c === 'add') {
    return a + b
  }
  else if(c === 'concat') {
    return a + b + ''
  }
}

let myVal: string = <string> addOrConcat(2,2, 'concat')
