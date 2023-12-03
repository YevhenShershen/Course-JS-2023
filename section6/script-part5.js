/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

146. ES7 EcmaScript 2016 includes i operator potęgowania
147. ES8 EcmaScript 2017
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