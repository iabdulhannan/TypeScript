// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

// Using index signature
interface TransactionObj {
  readonly [index: string]: number
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}

let prop: string = 'Pizza'
console.log(todaysTransaction[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for(let transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

todaysTransaction.Pizza = 50

// interface Student {
//   [key: string]: string | number | number[] | undefined,
//   name: string,
//   GPA: number,
//   classes?: number[]
// }
interface Student {
  name: string,
  GPA: number,
  classes?: number[]
}


//keyof assertion
const student: Student = {
  name: 'Doug',
  GPA: 4.0,
  classes: [100, 200]
}

for(let key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

for(let key in student) {
  console.log(`${key}: ${student[key as keyof typeof student]}`)
}


const logStudentKey = (student: Student, key: keyof Student) :void => {
  console.log(`Student ${key}: ${student[key]}`)
}

// interface Incomes {
//   [key: 'salary']: number
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'

type Incomes = Record<Streams, number>

const monthlyIncome: Incomes = {
  salary: 123,
  sideHustle: 123,
  bonus: 123
}

for (const revenue in monthlyIncome) {
  console.log(`${monthlyIncome[revenue as keyof Incomes]}`)
}
