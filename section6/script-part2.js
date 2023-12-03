/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

134. ES6 Map - przechowywanie danych jako klucz wartość
135. ES6 Set - przechowywanie unikalnych prymitywów i referencji do obiektów
136. ES6 Klasy wprowadzenie
137. ES6 Klasy - rozszerzanie klas z extends i super
*/
console.log("=======================SCRIPT-PART2.JS===========================")

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



//136. ES6 Klasy wprowadzenie
console.log('136. ES6 Klasy wprowadzenie')
//klasy zawsze w strict mode
class Car {
  constructor(name, year){
      this.name = name;
      this.year = year;
  }
  pritn(){
    console.log(this.name, this.year)
  }
}

const car1 = new Car("dodge",3333)
car1.pritn()//dodge 3333

let Animal = class BasicAnimal{
  constructor(name){
    this.name = name
    this._age = 1
//Czy w ES6 jest wspierany prze język statyczne property? - NIE ale możemy to emulować
   if(Animal.count === undefined) Animal.count = 0;
   Animal.count++;//emulujemy statyczne property w ES6
  }
  getName =()=>{
    return this.name
  }
  set age(value){
    if(value > 0) this._age = value // nie możemy dać nazwę age bo wtedy wywowujemy setter age dla tego piszemy _age
  }
  get age(){
    return this._age;
  }
  //static method
  static getNewAnimal(){
    return new Animal("Default animal")
  }
  //static method
  static getAnimalCount(){
    return Animal.count
  }
}

const animal1 = new Animal("Tiger")
console.log(animal1.getName())//Tiger
console.log(Animal.name)// nazwa klasy BasicAnimal
animal1.age = 10
console.log(animal1.age)//10

const animal2 = Animal.getNewAnimal()
console.log(animal2.getName())//Default animal

console.dir(Animal)

console.log(Animal.getAnimalCount())//2



//137. ES6 Klasy - rozszerzanie klas z extends i super
console.log('137. ES6 Klasy - rozszerzanie klas z extends i super')

class Animal2{
  constructor(name){
    this.name = name;

    if(Animal2.count === undefined) Animal2.count = 0
    this.id = Animal2.count;
    Animal2.count++;

    this._type = "animal";
  }
set type(str){
  if(typeof str === "string")this._type = str
}
get type(){
  return this._type
}
printName(){
  console.log("Animal",this.name)
}
}

class Human extends Animal2 {
//jeżeli rozszerzamy jakąś klase to powinni dodać do konstruktor funkcje 'super()'
  constructor(name){
    super(name)
}
//przesłaniamy metodę printName w Animal2
printName(){
  super.printName();// odłowujemy się do metody printName w klasie Animal2 //Animal Olek
  console.log("Human",this.name) //Human Olek
}
}

const human1 = new Human("Olek");
human1.printName();//Olek
console.log(Animal2.count)//1