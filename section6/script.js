/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

127. ES6 deklaracja zmiennych z let oraz stałych z const
128. ES6 funkcje strzałkowe
129. ES6 parametr rest
*/


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