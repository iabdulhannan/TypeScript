class Coder {
  
  constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'TypeScript') {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }
}

const Dave = new Coder('Dave', 'Rock', 42)


class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age)
    this.computer = computer
  }
  
  
  public getLang() {
    return `I write ${this.lang}`
  }
  
}

const sara = new WebDev('Mac', 'Sara', 'Lo-fi', 25)
console.log(sara.getLang())


interface Musician {
  name: string,
  instrument: string
  
  play(action: string): string
}


class Guitarist implements Musician {
  
  constructor(
    public name: string,
    public instrument: string
  ) {
    this.name = name
    this.instrument = instrument
  }
  
  play(action: string): string {
    
    return `${this.name} ${action} the ${this.instrument}`
  }
  
}

const harry = new Guitarist('Harry', 'Guitar')
console.log(harry.play('strums'))


class Peeps {
  static count: number = 0
  
  static getCount(): number {
    return Peeps.count
  }
  
  public id: number
  
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const john = new Peeps('John')
const steve = new Peeps('Steve')
const amy = new Peeps('Amy')

console.log('Peeps: ', Peeps.count)


class Bands {
  private dataState: string[]
  
  constructor() {
    this.dataState = []
  }
  
  public get data(): string[] {
    return this.dataState
  }
  
  public set data(data: string[]) {
    if (Array.isArray(data) && data.every((e) => typeof e === 'string')) {
      this.dataState = data
      return
    } else {
      throw new Error('Param is not an array of strings')
    }
  }
}

const myBands = new Bands()
myBands.data = ['Jal', 'Roxen']
console.log(myBands.data)
myBands.data = ['Jal', 'Roxen', 1]

