/*
============ARRAY METHODS LIST=============
1)Array.prototype.findLastIndex()
2)Array.prototype.flat()
3)
4)
5)
6)
7)
8)
9)
10)
*/

//Array.prototype.findLastIndex()
console.log('Array.prototype.findLastIndex()')
/*
начинает поиск по массиву с конца и возвращает индекс элемента который выполняет условия функции
если ненадоходит то возвращает -1
*/
const array1 = [5,12,33,44,55]
console.log(array1.findLastIndex(el => el < 50))//3
console.log(array1.findLastIndex(el => el < 0))//-1


//Array.prototype.flat() syntax flat(depth)
/*
Метод Flat() экземпляров Array создает новый массив со всеми элементами подмассива,
рекурсивно объединенными в него до указанной глубины.
*/
console.log('Array.prototype.flat()')
const arrFlat = [1,2,3,4, [22,33,44, [33,[44]]]]
console.log(arrFlat.flat())//[1, 2, 3, 4, 22, 33, 44, Array(2)]
console.log(arrFlat.flat(2))//[1, 2, 3, 4, 22, 33, 44, 33, Array(1)]


//Array.prototype.flatMap()
const arrFlatMap = [1, [[2], 3], [4]];
console.log(arrFlatMap.flatMap(el => el * 2))//[1, 2, 3, 4]
