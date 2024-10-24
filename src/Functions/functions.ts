type StringOrNumber = string | number;
type StringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string,
  active: boolean,
  albums: StringOrNumberArray //Using Type Alias in another Type Alias
}

type userId = StringOrNumber

// Literal Types

let myName: 'Gentleman'
let username: 'Gentleman' | 'Kingsman'

username = 'Gentleman' //Correct
username = 'Heloo' //Error: Type "Heloo" is not assignable to type "Gentleman" | "Kingsman"

//Functions
const add = (a, b) => { //Error:  Parameter a implicitly has an any type.,  Parameter b implicitly has an any type.
  return a + b
}

const addTypes = (a: number, b: number): number => {
  return a + b
}


type mathFunction = (a: number, b: number) => number

interface mathFunctionInterface {
  (a: number, b: number): number,
}

const multiply: mathFunction = (c, d) => {
  return c * d
}

// Optional parameters should be last in the list
const addAll = (a: number, b: number, c?: number): number => {
  return a + b + c //Error: c is possibly undefined
}

const addAllWithTypeGuard = (a: number, b: number, c?: number): number => {
//   Error: Function lacks ending return statement and return type does not include undefined
//   Add a type guard
  if (typeof c !== "undefined") {
    return a + b + c
  }
}

const addAllWithTypeGuardWithoutError = (a: number, b: number, c?: number): number => {
//   Add a type guard
  if (typeof c !== "undefined") {
    return a + b + c
  }
  return a + b
}


/*
* Default values do not work with Type Alias or Interfaces
* */


// default param value
// c is still optional, but it won't be undefined if not given explicitly due to a default value
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c
}
console.log(sumAll(1, 2, 3)) //6
console.log(sumAll(1, 2)) // 5


const sumAllWithDefaultInStart = (a: number = 5, b: number, c: number = 2): number => {
  return a + b + c
}

console.log(sumAllWithDefaultInStart(undefined, 1, 3)) // 9
console.log(sumAllWithDefaultInStart(1, 1, 3)) // 5
console.log(sumAllWithDefaultInStart(undefined, 1)) // 8



//Rest Parameters (always at the end too)
const total = (...nums: Array<number>) : number => {
  return nums.reduce((acc, currentValue) => acc + currentValue)
}

console.log(total(1,2,3,4,4,6)) // Correct
console.log(total([1,2,3,4,4,6])) // Error: Argument of type number[] is not assignable to parameter of type number


// Never type -  Used when end point is not reachable
// Used where errors are throw, or the function has some infinite loop
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

const infinite = (): never => {
  while (true) {
    console.log('Infinite Loop')
  }
}

const notInfinite = (): never => { //Error: A function returning never cannot have a reachable end point.
  let i = 0
  while (true) {
    i++;
    console.log('Infinite Loop')
    if( i === 10){
      break
    }
  }
}


const numberOrString = (value: number | string): string => {
  //Error:  Function lacks ending return statement and return type does not include undefined
  if(typeof value === 'string'){
    return 'String'
  }
  if(typeof value === 'number'){ //Waring: Redundant 'typeof' check: 'value' always has type 'number'
    return 'Number'
  }
}

const numberOrStringCorrect = (value: number | string): string => {
  //Error:  Function lacks ending return statement and return type does not include undefined
  if(typeof value === 'string'){
    return 'String'
  }
  if(typeof value === 'number'){ //Waring: Redundant 'typeof' check: 'value' always has type 'number'
    return 'Number'
  }
  return createError('This should never happen')
}
