/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

146. ES7 EcmaScript 2016 includes i operator potęgowania
147. ES8 EcmaScript 2017
148. ES9 EcmaScript 2018
149. ES6 generatory
*/

console.log("=======================SCRIPT-PART5.JS===========================")

//146. ES7 EcmaScript 2016 includes i operator potęgowania
const arr7 = [1,3,4,5,6,7,8,9,10,11]
console.log(arr7.includes(5))//true

console.log("Hello world!".includes("world"))//true
let a = Math.pow(2,3)
console.log(a)//8

let b = 2 ** 3
console.log(b)//8



//147. ES8 EcmaScript 2017
console.log('147. ES8 EcmaScript 2017')

const obj = {
  name: 'test',
  value: 99,
  str: 'Hello',
  o: {a:1}
}
console.log(Object.values(obj))//['test', 99, 'Hello', {…}]
console.log(Object.entries(obj))//['name', 'test'] ['value', 99]['str', 'Hello'] ['o', {…}]

function test(a,){}
test(1)
const foo = (a,)=>{}
foo(3,)

async function getData(){
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await response.json()
  console.log(data)
}
getData()

console.log(Object.getOwnPropertyDescriptors(obj))
/*name
:
{value: 'test', writable: true, enumerable: true, configurable: true}
o
:
{value: {…}, writable: true, enumerable: true, configurable: true}
str
:
{value: 'Hello', writable: true, enumerable: true, configurable: true}
value
:
{value: 99, writable: true, enumerable: true, configurable: true}
*/

let str = "Hello".padStart(10, "0")//bieżemy string , udzieliamy 10 znaków i uzupewniamy ich zerami
console.log(str)//00000Hello

str = str.padEnd(20, "!")
console.log(str)//00000Hello!!!!!!!!!!



//148. ES9 EcmaScript 2018
console.log('148. ES9 EcmaScript 2018')
async function *getData2(){
yield await Promise.resolve("ok 1")
yield await Promise.resolve("ok 2")
yield await Promise.resolve("ok 3")
yield await Promise.resolve("ok 4")
}
let dataIter = getData2()
dataIter.next().then(el =>console.log(el.value))//ok 1
dataIter.next().then(el =>console.log(el.value))//ok 2
dataIter.next().then(el =>console.log(el.value))//ok 3
dataIter.next().then(el =>console.log(el.value))//ok 4

async function testIter(){
let dataIter2 = getData2();
for await (let value of dataIter2){
  console.log("TestIter",value)
}
}
testIter()


//rest - zawsze musi być na końcu, on zbiera reszte naszych danych
const foo2 ={
  userName: "Ania",
  city: "KRK",
  country: "Poland"
}

const {userName, ...data} = foo2
console.log(userName)//Ania
console.log(data)//{city: 'KRK', country: 'Poland'}

//
function userData3({userName, country, ...params}){
  console.log(userName,country)//Ania Poland
  console.log(params) //{city: 'KRK'}
}
userData3(foo2)


//sread
const bar = {
  nameObj: "test",
  age:23,
  a:23,
  b:99
}
const obj2 = {
  a:1000,
  ...bar,
  c:7
}
console.log(obj2)//{a: 23, nameObj: 'test', age: 23, b: 99, c: 7} nadpisał 'a' bo ostania wartość wygrywa i nadpisuje


//finally in promise

fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => console.log(data)) //
.catch(error => console.log(error))
.finally(()=>{
  //wywoła się niezależnie od wyniku
  //resolve, error
  console.log("finally")
})



//149. ES6 generatory
console.log('149. ES6 generatory')

function * foo3(){
  yield "test 1"
  yield "test 2"
  yield "test 3"
}

const testIter3 = foo3()
console.log('testIter3', testIter3.next())//testIter3 {value: 'test 1', done: false}
console.log('testIter3', testIter3.next())//testIter3 {value: 'test 2', done: false}
console.log('testIter3', testIter3.next())//testIter3 {value: 'test 3', done: false}
console.log('testIter3', testIter3.next())//testIter3 {value: undefined, done: true}

function *genRandomId(){
  while(true){
    let v = Math.trunc(Math.random() * 1000)
    yield v
  }
}
const randomId = genRandomId()
console.log("RANDOM_ID",randomId.next())
console.log("RANDOM_ID",randomId.next())
console.log("RANDOM_ID",randomId.next())
console.log("RANDOM_ID",randomId.next())


function *genRandomMaxId(){
  while(true){
    //pierwsze wywołanie next() zatrzyma nam na yield czyli przed pszypisyłaniem wartości
    //kolejne wyłowanie next()
    const maxValue = yield
    let v = Math.trunc(Math.random() * maxValue)
    yield v;
  }
}
const arr = Array.from(Array(10).keys())
console.log(arr)//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomNumMaxIter = genRandomMaxId();
arr.forEach(el =>{
  randomNumMaxIter.next()// zatrzymujemy się przed przepisaniem wartości do maxValue
  const random = randomNumMaxIter.next(150)
  console.log("RANDOM",random.value)
})
