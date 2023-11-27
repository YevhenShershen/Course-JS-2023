/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

142. ES6 Array - nowe metody
*/

//142. ES6 Array - nowe metody
console.log('142. ES6 Array - nowe metody')

const array1 = Array.of(3,4,5,6,7,'sded',{})
console.log(array1)//[3, 4, 5, 6, 7, 'sded', {…}]

const array2 = Array.from("test")
console.log(array2)//['t', 'e', 's', 't']

const array3 = Array.from([1,2,3,4,5], (a)=> a * 2)
console.log(array3)// [2, 4, 6, 8, 10]

const array4 = Array.from([1,2,3,4,5], function (a){
 return a * this.value //this z obiektu
},{value: 4})
console.log(array4)

const array5 =[ 2,13,4,6,8,9]
console.log(array5.fill(100))//[100, 100, 100, 100, 100, 100]
console.log(array5.fill(0,2))//[100, 100, 0, 0, 0, 0]
console.log(array5.fill(9,1,4))//[100, 9, 9, 9, 0, 0]

//zwraca pierwszy rezultat
console.log(array5.find((el)=> el < 10))//9 element
console.log(array5.findIndex(v => v > 8))//0  index

const test = [100,3 ,44,55,66]
console.log(test.copyWithin(1,3)) //[100, 55, 66, 55, 66] od indeksu 1 bedą skopijowane wartości od 3 indeksu
//argumenty w funkcji copyWithin(target, start, end)
console.log([1,2,3,4,56,7].copyWithin(1, 3, 4))//  [1, 4, 3, 4, 56, 7]

const arrTest = [256, 'test', {}, 34]
for (let c of arrTest.values()) console.log(c)
for (let c of arrTest.keys()) console.log(c)
for (let [key, value] of arrTest.entries()) console.log(key, value)
