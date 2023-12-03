
/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

145. ES6 Funkcje tablicowe forEach filter reduce map every itd
*/

console.log("=======================ARRAY-FUNCTIONS.JS===========================")

//145. ES6 Funkcje tablicowe forEach filter reduce map every itd
console.log('145. ES6 Funkcje tablicowe forEach filter reduce map every itd')

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

arr.forEach((el)=>console.log(el))

const arr2 = arr.map((el)=> el * 3)

const arr3  = arr2.filter( el => el > 10)
console.log(arr3)//[12, 15, 18, 21, 24, 27, 30, 33, 36]

//reduce przyjmuje 2 argumenty (accumulator, currentElement)
const arr4 = arr2.reduce((acc, cur)=> acc + cur)
console.log(arr4)//234

const arr5 = arr.find (el => el > 5)
console.log(arr5)//6 zwraca pierwszą wartość która odpowiada warunku true

const foundIndex = arr.findIndex(el => el > 4)
console.log(foundIndex)//zwraca indeks elemntu 4

const numbers = [2,3,4,5,6,7]
const info = numbers.every(el => el >=1)
console.log(info)//true (sprawdza wszyskie elementy czy one spewniają warunek)

const atLeastOne = numbers.some(el => el > 7)
console.log(atLeastOne)//false (sprawdza wszyskie elementy czy choć jeden  spewniają warunek)
