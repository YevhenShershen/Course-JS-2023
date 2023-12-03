/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

127. ES6 deklaracja zmiennych z let oraz stałych z const
128. ES6 funkcje strzałkowe
129. ES6 parametr rest
130. ES6 spread operator
131. ES6 Przypisanie destrukturyzujące
132. ES6 Pętla for
133. ES6 Pętla for of kontra for in
*/

console.log("=======================SCRIPT.JS===========================")
//127. ES6 deklaracja zmiennych z let oraz stałych z const
console.log('127. ES6 deklaracja zmiennych z let oraz stałych z const')

//var ma zakres globalny albo funkcyjny
//hoisting przenosi deklarację someVarData poza if

if( 1 == 1 ){
  var someVarData = 8
}
console.log(someVarData)



//128. ES6 funkcje strzałkowe
console.log('128. ES6 funkcje strzałkowe')

const print = a => console.log(a)
print("Hello world!")

//musimy uważać kiedy zwracamy obiekt, to obiekt zwracamy w nawiasach okrągłych () => ( OBJECT )

const getObject = () => ({name: 'Axel'});

[1,2,3,4,5].forEach((el)=> console.log(el))

/*
Funkcje strałkowe jako konstruktor nie wykożystujemy

Funkcja strzałkowa nie zawira tablicy arguments
const argTest =()=> console.log(arguments)
argTest(1,2,3)

*/
const artTest =(...arg) => console.log(arg)
artTest(1,2,3)//[1, 2, 3]

//this

let objTest ={
  data: "Hello",
  foo:function(){
    setTimeout(function(){
    console.log(this)//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    },100)
  }
}
objTest.foo()

let objTest2 ={
  data: "Hello",
  foo:function(){
    setTimeout(()=>{
    console.log(this)//{data: 'Hello', foo: ƒ}
    },100)
  }
}
objTest2.foo()



//129. ES6 parametr rest
console.log('129. ES6 parametr rest')

const testRest = (...params) =>console.log(params)
testRest(1,2,3,4,5)

//jeżeli chcemy użyć rest w funkcji która zawiera argumenty to używamy go na końcu argumentów
const restFoo = (a, b, ...params) => {}



//130. ES6 spread operator
console.log('130. ES6 spread operator')

function spreadFoo (a,b,c){
  console.log(a,b,c)
}
const tab = [3,2,1]
spreadFoo(...tab)

const userName = "Ania"
const chars = [...userName]
console.log(chars)

const basicObject ={ a: "A", b: "B", c: "C"}
let secondObj = {
  d:"D",
  ...basicObject,
  e:"e"
}
console.log(secondObj)

const tasksList =[
  {name:"Task 1", completed: true},
  {name:"Task 2", completed: false},
  {name:"Task 3", completed: true},
]

//tasksList.push( {name:"Task 4", completed: true}) można zrobić w taki sposób
//ale my idziemy w lepszą strone i używamy spread operator

const newTasksList = [...tasksList, {name:"Task 4", completed: true}]
console.log(newTasksList)



//131. ES6 Przypisanie destrukturyzujące (destructuring)
console.log('131. ES6 Przypisanie destrukturyzujące')

//przepisywanie do zmiennych num, name, obj
const [num, name, obj] = [12, "Ania", {b:6}]
console.log(num);

//używamy tych samych nazw dla destrukturyzacji
const {username, age, city ="KRK"} = {username: "Ola", age: 30}
console.log(username)//Ola
console.log(city)//KRK

//jeżeli chcemy pominąć jakiś elementy z tablicy (, ,)
const[f, ,h] = [1,3,55]
console.log(f,h)

//
function gerUserData(){
  const userCity = "Wawa";
  const street = "Wilcza"
  return {
    //Zapis skrócony
    //nazwa właściwości będzie taka sama jak i pobrana nazwa (userCity:userCity)
    userCity,
    street
  }
}
const userData1 = gerUserData()
console.log(userData1)//{userCity: 'Wawa', street: 'Wilcza'}

const {userCity, street} = userData1


const userDetails = {
  name: "Karol",
  age: 22,
  city: "Gdańsk"
}
//wyciągamy tylko dwie właściwości z naszego obiektu
function printUser({city, name}){
console.log(city, name)//Gdańsk Karol
}
printUser(userDetails)


//wyciąganie zagnieżdżonych właściwości z obiektu
const employee = {
  name: "Ola",
  id:32,
  employment:{
    company: "example.com",
    address:{
      country: "Poland",
      street: "Polna"
    }
  }
}

const {id, employment:{company}}  = employee //id, company
console.log(id, company) //32 'example.com'
const {employment:{address:{country}}} = employee //Poland

//Jeżeli właścowości nie bedzie w obiekcie to przepisze dane które my ustawiliśmy
//wyciągamy z właściwości 'street' i przepisujemy wartość do zmiennej 'companyStreet'
const {employment:{address:{street: companyStreet = "Wilcza"}} }= employee
console.log(companyStreet)//Polna


//132. ES6 Pętla for
console.log("132. ES6 Pętla for")

const tab1 = [1,2,3,4,5,6,7]
for (let el of tab1){
  console.log(el)
}
const str = 'text'
for (let el of str){
  console.log(el)
}

const map1 = new Map()
map1.set("test", {id:1, content:'text'})
const car = {car: 'GMC'}
map1.set(car, {topSpeed:200})

console.log(map1.get("test"))//{id: 1, content: 'text'}
console.log(map1.get(car))//{topSpeed: 200}


for( const entry of map1){
  console.log(entry)//['test', {…}], [{…}, {…}]
}
for (const [key, value] of map1){
  console.log(key , value)
  //test {id: 1, content: 'text'}
  //{car: 'GMC'} {topSpeed: 200}
}

const set = new Set([1,2,3,4,55,121])
for (const v of set){
  console.log(v)
}

const elementsSpan = document.querySelectorAll("span")
for (const el of elementsSpan){
  el.innerHTML = "Add text to Span"
}



//133. ES6 Pętla for of kontra for in
console.log('133. ES6 Pętla for of kontra for in')

const arr = [12,20,110]
delete arr[1]
//Pokazuje wartości
for (const v of arr){
  console.log(v) //12,undefined,110
}
//Pokazuje indeksy
for( const k in arr){
  console.log(k)//0, 2, 3
}


const obj2 = {
  a:10,
  txt:"text"
}

Object.defineProperty(obj2, "nazwa_property",{
  value:45,
  configuration:true, // czy można skasować property
  writable:false, // czy można nadpisać wartość
  enumerable: false
})
console.log(obj2)//{a: 10, txt: 'text', nazwa_property: 45}

//(nazwa_property nie jest wyszwietlana przez to że mamy właściwość enumerable:false)
for(const v in obj2)  console.log('For in object',v) // a txt

for (const v of Object.values(obj2)) console.log(v) //10 txt
