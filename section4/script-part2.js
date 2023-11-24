/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

107. Object - metoda assign
108. Object - enumeracja kluczy i wartości
109. Object - serializacja danych
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