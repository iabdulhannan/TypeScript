type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let a: One = 'hello'
let b = a as Two //assignment to a less specific type
let c = a as Three ////assignment to a more specific type


let d = <One> 'world'
let e = <string | number> 'world'


const addOrConcat = (a: number, b: number, c: 'add' | 'concat') : number|string => {
  if(c === 'add') return a + b
    return a + b + ''
}

let myVal: string = <One> addOrConcat(2,2, 'concat')

// BE CAREFUL!! TypeScript sees no error here because you asserted - but a string is returned instead of a number
let nextVal: number = <number> addOrConcat(2,2, 'concat')


10 as unknown as string

// The DOM
const img =  document.querySelector('img') as HTMLImageElement
const myImg =  document.getElementById('#img')! as HTMLImageElement
img.src
myImg.src

