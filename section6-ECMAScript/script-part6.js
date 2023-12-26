/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

150. ES6 Reflext api
151. ES6 Proxy api
153. ES10 EcmaScript 2019
154. ES11 EcmaScript 2020
*/

console.log("=======================SCRIPT-PART-6.JS===========================")

//150. ES6 Reflext api
console.log('150. ES6 Reflext api')

const car = {
  nameCar: "ford",
  topSpeed:200,
  printInfo: function (){
    console.log(this.nameCar, this.topSpeed)
  }
}
//czy wartość zmiennej nameCar w obiekcie car istnieje
console.log(Reflect.has(car, "nameCar"))//true
console.log(Reflect.has(car, "brand"))//false

//ustawiamy nową property dla obiektu
Reflect.set(car, "brand", "test");
console.log(Reflect.has(car, "brand"))//true

console.log(Reflect.ownKeys(car))// ['nameCar', 'topSpeed', 'printInfo', 'brand']

Reflect.deleteProperty(car, "brand")
console.log(Reflect.has(car, "brand"))//false

function Test(a,b){
this.a = a,
this.b = b
}
const obj = Reflect.construct(Test, [1,5])
console.log(obj)//Test {a: 1, b: 5}



//151. ES6 Proxy api
console.log('151. ES6 Proxy api')

let obj1 = {
  a:10,
  b: 99,
  str: "text"
}

const handler = {
  get(target, prop, receiver){
    if(prop === "a") return "A!!!"
    return target[prop] + "!";
  },
  set(target, prop, value){
    if(prop === "a" || prop === "b") {
      if(Number.isInteger(value)){
        target[prop] = value
      }
    }else if(prop === "str" && typeof value === "string"){
      target[prop] = value
    }else{
      console.log("WRONG DATA!")
    }
  }
}

const proxy1 = new Proxy(obj1,handler)
console.log(proxy1.a)//A!!!
console.log(proxy1.b)//99!!!
console.log(Reflect.get(proxy1, "str"))//text!

proxy1.b = 112
console.log(proxy1.b)//112!
proxy1.b = "test"
console.log(proxy1.b)//112!

proxy1.str = 23//WRONG DATA!
console.log(proxy1.str)//text!
proxy1.str = "OSA"
console.log(proxy1.str)//OSA!


///153. ES10 EcmaScript 2019
console.log('153. ES10 EcmaScript 2019')

const arr1 = [1,2,3,4,5, [,4,5,6,7,[33,44,55]]]
//Metoda flat() spłaszcza zagnieżdżone w sobie tablice.
// Możemy regulować poziom spłaszczenia podając do niej parametr depth .
console.log(arr1.flat())// [1, 2, 3, 4, 5, 4, 5, 6, 7, Array(3)]
console.log(arr1.flat(2))// [1, 2, 3, 4, 5, 4, 5, 6, 7, 33, 44, 55]

console.log([1,3,4].flatMap( x=>[x, x*2]))//[1, 2, 3, 6, 4, 8]

const entries = new Map([
  ["a", 23],
  ['str', 'text'],
  ['obj', {data:10}]
])

const obj3 = Object.fromEntries(entries)
console.log(obj3)//{a: 23, str: 'text', obj: {…}}

console.log('    \r\n Hellow world   '.trimStart())//kasuje spacje z przodu
console.log('     Hellow world \r\n   '.trimEnd())//kasuje spacje z końcu

//pomijamy error tylko wżycamy informacje o Błędzie
/*
Było kiedyś w taki sposób
try{
  asd
}catch(error){
  console.log(error)
}
*/
//teraz w ES10 (error) omijamy
try{
asd
}catch{
  console.log("Błąd")
}

const symbol = Symbol("Symbol info")
console.log(symbol.toString(symbol))//Symbol(Symbol info)
console.log(symbol.description)//Symbol info



//154. ES11 EcmaScript 2020
console.log('154. ES11 EcmaScript 2020')

let num = Number.MAX_SAFE_INTEGER;
console.timeLog(num)//Timer '9007199254740991' does not exist
let newNum = 9007199254740995n; // BigInt
let newNum2 = 9007199254740999n; // BigInt
let newNum3 =  newNum + newNum2
console.log(newNum3)//18014398509481994n


//DYNAMICZNY IMPORT
if(1 === 1){
  import("./modules.js").then(obj => console.log(obj)
  ).catch(ERR =>console.log(ERR))
}

async function loadCode(){
let { add , multiply} = await import("./modules.js")
let result = add(2, 19)
console.log(result)//21
}

loadCode()

// nullish operator ?? -null i undefined

const x = null || 10; // 10 jako domyślna wartość
console.log(x);// 10

const str = "" || "text"//pusty string to false
console.log(str)//text

const y = null ?? 22 //jeśli liwa strona nullish (null czy undefined) //22
console.log(y)//22
const txt  = "" ?? "text"
console.log(txt.length)//0


//Optional chaining
let o = {
  a:10,
  obj: {
    b:23,
    data:{
      str:"text 123"
    }
  }
}
console.log(o?.obj?.data?.str)//text 123


const promiseArr =[
  Promise.resolve(20),
  Promise.reject(null),
  Promise.resolve({str: "ok"}),
  Promise.reject(new Error("Error"))
]

Promise.allSettled(promiseArr)
.then(results => {console.log("All promises settled", results)
  results.forEach(e => console.log(e.status , e.value))
}
)//All promises settled (4) [{…}, {…}, {…}, {…}]

/*
fulfilled 20
rejected undefined
fulfilled {str: 'ok'}
rejected undefined
*/


const str2 = "Hello Anna, Kasia, Ania, Antonia, Ola"
const regexp = new RegExp('An[a-z]*', "g")
let match;
while((match = regexp.exec(str2)) !== null){
  console.log(match)
  console.log(`${match[0]} at index: ${match.index}`)

}
/*
['Anna', index: 6, input: 'Hello Anna, Kasia, Ania, Antonia, Ola', groups: undefined]
Anna at index: 6
['Ania', index: 19, input: 'Hello Anna, Kasia, Ania, Antonia, Ola', groups: undefined]
Ania at index: 19
['Antonia', index: 25, input: 'Hello Anna, Kasia, Ania, Antonia, Ola', groups: undefined]
Antonia at index: 25
*/

console.log(globalThis === window)//true


//module namespace exports
import * as utils from './modules.js'
export {utils};


//właśnie to jest zapis 'module namespace exports'
export * as utils from'./modules.js'


//for in order według kolejności zdefiniowania kluczy w obiekcie