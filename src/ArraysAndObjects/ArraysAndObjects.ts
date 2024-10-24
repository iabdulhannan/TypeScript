let myTuple: [string, number, boolean] = ['Dave', 1, true] //All Good here

let mixed = ['Dave', 1, true]

//Inferred type of mixed would be (string | number | boolean)[] thus
// different from that of myTuple

mixed = myTuple //Won't cause any errors

myTuple = mixed

/*
	Error: (string | number | boolean)[] is not assignable to
	[string, number, boolean], target requires 3 elements but the source may
	have fewer
*/

myTuple[3] = 42 //Error: Type 42 is not assignable to type undefined

myTuple[2] = 42 //Error: Type number is not assignable to type boolean


let emptyArray = [] //let emptyArray: any[]
let emptyStringArray: string[] = []
emptyStringArray.push("0") //Correct
emptyStringArray.push(0) // Argument of type number is not assignable to parameter of type string


//Objects
let myObj: object

// But...
myObj = [] //Correct
myObj = {} //Correct


const inferObjectType = { //const inferObjectType: { first: string, second: boolean }
  first: 'hello',
  second: false
}

inferObjectType.first = 12  // Type number is not assignable to type string


type Guitarist = {
  name: string,
  active: boolean,
  albums: Array<string | number>
}


let evhAgain: Guitarist = {
  name: 'Eddy',
  albums: [2000, 1900, 'Hello World']
}
/*
*  Property active is missing in type
* {   name: string;   albums: (string | number)[]; }
* but required in type Guitarist
* */

let evh: Guitarist = {
  name: 'Eddy',
  active: false,
  albums: [2000, 1900, 'Hello World']
}

let jp = {
  name: 'Jimmy',
  active: true,
  albums: [2000, 1900, 'Hello World']
}

evh = jp
/*
jp isn't a Guitarist but, it is acceptable since it has all key value pairs however if you remove
a pair from jp, line 'evh = jp' would throw errors like :
Property active is missing in type
{   name: string;   albums: (string | number)[]; }
 but required in Guitarist
*/

// To make active Optional add a ? to it
/*
type Guitarist = {
  name: string,
  active?: boolean,
  albums: Array<string | number>
}
 */

evh.years = 40 //Property years does not exist on type Guitarist


type OptionalGuitarist = {
  name?: string,
  active: boolean,
  albums: Array<string | number>
}
const zero: OptionalGuitarist = {
  name: 'Zero',
  active: true,
  albums: [200, 1900, 'Hello World']
}
console.log(zero.name) //Correct
console.log(zero.name.toLowerCase()) //Error: zero.name is possibly undefined
console.log(zero.name?.toLowerCase()) //Correct

const narrowingExample = () => {
  if (zero.name) {
    console.log(zero.name.toLowerCase()) //Correct
  }
}



// Enums
/*
* Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something
* added to the language and runtime
* */


enum GradeUnmarked {
  U,
  D,
  C,
  B,
  A
}

enum GradeMarked {
  U = 1,
  D,
  C,
  B,
  A
}

enum GradeMarked2 { //Error: Enum member must have initializer
  U = 'A',
  D,
  C,
  B,
  A
}

console.log(GradeUnmarked.U) //0
