/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

107. Object - metoda assign
108. Object - enumeracja kluczy i wartości
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