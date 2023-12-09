/*
============ARRAY METHODS LIST=============
1)Array.prototype.concat()
2)Array.prototype[@@iterator]() for(const value of arr)
3)Array.prototype.copyWithin()
4)Array.prototype.entries()
5)Array.prototype.every()
6)Array.prototype.fill()
7)Array.prototype.filter()
8)Array.prototype.find()
9)Array.prototype.findIndex()
10)Array.prototype.findLast()
*/




//Array.prototype.concat() syntax concat(value1) //concat(value1, value2)
/*
The concat() method of Array instances is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.
*/
console.log('Array.prototype.concat')
//return NEW ARRAY
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const arr3 = arr1.concat(arr2,arr1)
console.log(arr3)//[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]
const div = document.getElementById("show-information")
div.innerHTML = arr3


//Array.prototype[@@iterator]()
console.log('Array.prototype[@@iterator]()')
const arr4 = []
for(const value of arr1){
  console.log(value)// 1 2 3 4
}


//Array.prototype.copyWithin() syntax copyWithin(target, start) //copyWithin(target, start, end)
console.log('Array.prototype.copyWithin')
/*
The copyWithin() method of Array instances shallow copies part of this array to another location
in the same array and returns this array without modifying its length.
*/
console.log(arr1.copyWithin(0,3))//[4, 2, 3, 4]
console.log(arr1)// [4, 2, 3, 4]


//Array.prototype.entries()
/*
The entries() method of Array instances returns a new array iterator object that contains
the key/value pairs for each index in the array.
*/
console.log('Array.prototype.entries()')
const iterator1 = arr1.entries()
// console.log(iterator1.next().value)//[0, 4]
// console.log(iterator1.next().value)//[1, 2]
for (const element of iterator1) {
  console.log(element);
}
/*
[0, 4]
[1, 2]
[2, 3]
[3, 4]
*/

//Array.prototype.every() syntax every(callbackFn)
console.log('Array.prototype.every()')
/*
The every() method of Array instances tests whether all elements in the array pass the test
implemented by the provided function. It returns a Boolean value.
*/

let validateArray = arr3.every(el => el> 10)
console.log(validateArray)//false
validateArray = arr3.every(el=> el < 10)
console.log(validateArray)//true


//Array.prototype.fill() syntax fill(value, start, end)
console.log('Array.prototype.fill()')
/*
The fill() method of Array instances changes all elements within a range of indices
in an array to a static value. It returns the modified array.
*/
const arr5 = [1,23,4,5,66,7]
console.log(arr5.fill(4))//[4, 4, 4, 4, 4, 4]


//Array.prototype.filter()
console.log('Array.prototype.filter()')
const words = ['name', 'surname', 'cat']
let result =  words.filter(el => el.length > 3)
console.log(result)//['name', 'surname']
result[0] = "123"
console.log(result, words)


//Array.prototype.find()
console.log('Array.prototype.find()')
/*
The find() method of Array instances returns the first element in the provided array
that satisfies the provided testing function. If no values satisfy the testing
function, undefined is returned.
*/
console.log(words.find(el => el === "cat"))//cat
console.log(words.find(el => el === "cat2"))//undefined


//Array.prototype.findIndex()
console.log('Array.prototype.findIndex()')
console.log(words.findIndex(el => el === 'cat'))//2
console.log(words.findIndex(el => el === "dog"))// -1 (arr dont contain element "dog" and function return -1)


//Array.prototype.findLast()
/*
начинает поиск по массиву с конца и возвращает элемент который выполняет условия функции
если ненадоходит то возвращает undefined
*/
console.log('Array.prototype.findLast()')
console.log(words.findLast(el => el.length > 3))//surname
console.log(words.findLast(el => el.length > 11))//undefined