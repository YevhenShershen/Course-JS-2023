/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

155. ES12 EcmaScript 2021
*/

console.log("=======================SCRIPT-PART-7.JS===========================")

//155. ES12 EcmaScript 2021
console.log('155. ES12 EcmaScript 2021')

let num = 100_000_000;//możemy rodzielić liczbę _ że bybyło czytelnie i to nie powoduje błąd
console.log(num)//100000000

let num2 = 10.234_45
console.log(num2)//10.23445

//Zamieniamy lietere 'A' na litere "K"
console.log("Ania Anna Ola Karol".replaceAll("A", "K"))//Knia Knna Ola Karol

//Weak reference
const objWeak = new WeakRef({
  data:10, str:'text'
}
)
//bez deref() nie da się odłować się do obiektu
console.log(objWeak.deref())//{data: 10, str: 'text'}
console.log(objWeak.deref().data)//10

//Promise Any
const promises = [ Promise.resolve("ok"), Promise.reject("great"), Promise.resolve("nice")]
//any
let result = Promise.any(promises)
.then(result => console.log(result))
.catch(err => console.log(err))
console.log(result)

//logical assignment operators
let a = 10;
let b = 15;
//if(a) a = b niżej krótszy zapis naszego if
a &&= b
console.log(a)//15

let c = null;
let d = 10;
if(!c) c = d
c ||= d // jeżeli w 'c' jest falsy value to przypisz 'd' do 'c'
console.log(c)//10

let e = undefined; // null
let f = 34;
e ??= f
console.log(e)//35