/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

107. Object - metoda assign
108. Object - enumeracja kluczy i wartości
109. Object - serializacja danych
110. Object - defineProperty
111. call apply bind
112. Closures - domknięcia
113. Closures - currying
114. Closures - prywatne dane dzięki domknięciom
115. Closures z zmiennymi var let i const
*/



//107. Object - metoda assign
console.log('107. Object - metoda assign')

let obj ={ a:1, b:2, str: 'text', arr:[1,2,3], info:{o:1}}
let data ={ test:333}
//assign powącza objekty medzy sobą
//(perwszy argument w metodzie assign to obiekt do którego bedzie wszystko wżucone)
//drugiargument z którego te właścowości będą pobrane
let result = Object.assign(data, obj)
console.log(result)//{test: 333, a: 1, b: 2, str: 'text', arr: Array(3)}
console.log(data)//{test: 333, a: 1, b: 2, str: 'text', arr: Array(3)}
console.log(result === data) //true
console.log(result === obj) //false

//Oject.assign robie płutką koppie , to znaczy że mamy dostęp do tych samych tablic o obiektów
console.log(obj.arr === data.arr)//true
console.log(obj.info === data.info)//true
console.log(obj.str === data.str)//true
data.arr = [1,2,3]//zmieniamy w pamięc tabele "arr" a nie w jednym objekcie
console.log(obj.arr)

//tworzenie obiektu który zawiera trzy inne ibiekty
let o1 = {a:1, b:2}
let o2 = {c:3}
let o3 = {txt:"text"}
let obj2 = Object.assign({}, o1,o2,o3)
console.log(obj2) //{a: 1, b: 2, c: 3, txt: 'text'}



//108. Object - enumeracja kluczy i wartości
console.log('108. Object - enumeracja kluczy i wartości')

//pobieranie kluczy z objektu
const objKeys = Object.keys(obj);
console.log(objKeys)
for(const key of objKeys){
  console.log("Key: ", key, "value: ", obj[key])
}

//pobieranie wartości
const objValues = Object.values(obj)
console.log(objValues)

//robimy tablice [[klucz, wartośc],....]
const objEntries = Object.entries(obj)
console.log(objEntries)

for(const [key, value] of objEntries){
  console.log(key, value)
}



//109. Object - serializacja danych
console.log('109. Object - serializacja danych')

/*
Serializacja to zapisanie obiektu oraz jego właściwości
w takim stanie aby taki obiekt mógł być póżniej łatwo
odtworzony
*/

let source ={
  str: "Hello",
  a: 24,
  data:{
    b:111,
    arr: [1,2,3,4,5]
  },
  date: new Date()
}
let strData = JSON.stringify(source)
console.log(strData) //{"str":"Hello","a":24,"data":{"b":111,"arr":[1,2,3,4,5]},"date":"2023-11-24T07:49:46.350Z"}

let otherObj = JSON.parse(strData);
console.log(otherObj) //{str: 'Hello', a: 24, data: {…}, date: '2023-11-24T07:51:18.515Z'}

//prawidłowa data w formie obiektu
otherObj.date = new Date(otherObj.date)
console.log(otherObj)//{str: 'Hello', a: 24, data: {…}, date: Fri Nov 24 2023 08:52:23 GMT+0100 (Central European Standard Time)}
console.log(otherObj.date instanceof Date) //true - podtwiedzenie że data jest prawidłowa

//za pomocą JSON.stringify i JSON.parse możemy stworzyć kopije obiektu
console.log(source.data === otherObj.data)//false więc mamy Deepth copije



//Odtwarzaj 110. Object - defineProperty
console.log('Odtwarzaj 110. Object - defineProperty')

let obj12 = {
  a:12,
  b:13
}
obj12.c=14;
//value = wartość właściwości
//writable = czy można modyfikować wartość tej właściwości
//configurable = czy można skasować tą właściwość
//enumerable = czy można enumerować tą właściwość
Object.defineProperty(obj12, 'prop', {
  value: "test",
writable: true,
configurable: false,
enumerable:true
})//{a: 12, b: 13, c: 14, prop: 'test'}
console.log(obj12)
delete obj12.prop//{a: 12, b: 13, c: 14, prop: 'test'} nie możemy skasować
console.log(obj12)




//111. call apply bind
console.log('111. call apply bind')

const employee = {
  name: "Ola",
  printInfo: function( surname, city){
  console.log(this.name,surname, city)
  }
}
employee.printInfo("Kowalska", "Warszawa")//Ola Kowalska Warszawa
const user = {name: "Adam"}

//bieżemy metode printInfo z obiektu employee i za pomocą call wskazujemy w którym objekcie chcemy ją wyłować
employee.printInfo.call(user, "Adamski", "Krk")//po przecinku możemy dodac dodatkowe argumenty
//wynik Adam Adamski Krk

employee.printInfo.apply(user, ["Adamski", "Gd"])//po przecinku możemy dodac dodatkowe argumenty
//wynik Adam Adamski Gd

//tworzymy zmienną której przepisujemy funkcje która bedzie wywowyłana na obiekcie user
let userInfo = employee.printInfo.bind(user, "Kowalska", "Szczecin")
userInfo()
//wynik Adam Adamski Szczecin



//112. Closures - domknięcia
console.log('112. Closures - domknięcia')

/*
Domkniencie tzw. closures to jest zasięg stworzony przez funkcję wraz
z otaczającym ją środowiskiem czyli zmiennymi oraz innymi funkcjami,
które razem oddzielone są od reszty kodu programu.
*/

let b = 30;
let c = 10;
function foo1(){
  let b = 5;
  c= -1
  console.log("b:" , b)
}
foo1()//b: 5
//funkcja test ma dostęp do wszystkich dannych które znajdują się w funkcji bar1
let d = 99
function bar1(){
  let e =12;
  function test(){
    let num = 45
    console.log(`d: ${d} e: ${e} num: ${num}`)
  }
  return test
}
let show = bar1()
console.log(show)//test(){  let num = 45  console.log(`d: ${d} e: ${e} num: ${num}`)}
show()//d: 99 e: 12 num: 45



//113. Closures - currying
console.log('113. Closures - currying')

/*
Domknięcia pozwalają na tzw. currying czyli rozkładanie
funkcji z wieloma argumentami na funkcje z pojedynczymi
argumentami, Każda funkcja zwraca nową funkcję przyjmującą
jeden parametr.
*/

function test(x){
  return function(y){
    console.log(x,y)
  }
}
let show1 = test(12)
show1(5); //12 5



//114. Closures - prywatne dane dzięki domknięciom
console.log('114. Closures - prywatne dane dzięki domknięciom')

/*
Dzięki domknięciom możemy tworzyć konstrukcje gdzie
nasze dane staną się prywatne, więc obejdziemy
ograniczenia JS
*/

function test1(){
  //Emulowanie prywatnych danych w JS (przykład z privData)
  let privData = "Hello!"

  function showPrivData(){
    console.log(privData)
  }

  function setData(value){
    privData = value
  }

  return{
    show: showPrivData,
    setData: setData
  }
}

const obj1 = test1()
console.log(obj1)//{show: ƒ, setData: ƒ} mamy dostęp tylko do dwóch funkcji, a do privData nie mamy
obj1.show()
obj1.setData(67)
obj1.show()



//115. Closures z zmiennymi var let i const
console.log('115. Closures z zmiennymi var let i const')

/*
Może pojawić się problem z domknięciamim gdyż
zapamiętywana jest referencja, a nie wartość
*/

for (var i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i)
  },500)
}
//3
//3
//3
for (let i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i)
  },500)
}
//0
//1
//2