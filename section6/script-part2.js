/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

134. ES6 Map - przechowywanie danych jako klucz wartość
135. ES6 Set - przechowywanie unikalnych prymitywów i referencji do obiektów
*/


//134. ES6 Map - przechowywanie danych jako klucz wartość
console.log('134. ES6 Map - przechowywanie danych jako klucz wartość')

const map1 = new Map()
map1.set("a1", 1);
map1.set(10, {test:"text"})

console.log(map1.get(10)) //{test: 'text'}
console.log(map1.size)//2

const apple = { name: "Apple"}
map1.set(apple, {name:'apple'})
console.log(map1.get(apple)) //{name: 'apple'}

map1.delete(10)
console.log(map1.get(10))//undefined
console.log(map1.has(10))//false //has sprawdza czye jest taki klucz
console.log(map1.has("a1"))//true

//map keys(), values(), entries()

const iterator1 = map1.entries()
//console.log(iterator1.next())//{value: Array(2), done: false}
let result = iterator1.next();//The next() method of Generator instances returns an object with two properties done and value.
while(!result.done){//
  console.log(result.value);//['a1', 1], [{…}, {…}]
  result = iterator1.next()
}

for (const [key, value] of map1){
  console.log("map1: " + key + " " + value)
}

const map2 = new Map([["key1",8],["key2", 99]])
map2.forEach((key,value)=>{
  console.log(key, value) // 8 'key1' 99 'key2'
})
console.log('============================================================================')
const map3 = new Map([...map1,...map2])
map3.forEach((key,value)=>{
  console.log(key, value) //
})



//135. ES6 Set - przechowywanie unikalnych prymitywów i referencji do obiektów
console.log('135. ES6 Set - przechowywanie unikalnych prymitywów i referencji do obiektów')

const set1 = new Set();
set1.add(2);
set1.add(NaN)
set1.add({a:10})
set1.add("text")
set1.add(2)//nie można dodać taki samy element który już się znajduje
set1.delete("text")
console.log(set1.size)

for(const item of set1) console.log(item)
const arr = Array.from(set1)
let arr2 = [...set1]
console.log(arr, arr2)//[2, NaN, {…}]    [2, NaN, {…}]

const set2 = new Set([...set1, 11, 22, 33, function(){}])