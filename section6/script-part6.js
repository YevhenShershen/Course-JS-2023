/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

150. ES6 Reflext api
*/

console.log("=======================SCRIPT-PART-6.JS===========================")

//150. ES6 Reflext api
console.log('150. ES6 Reflext api')

const car = {
  nameCar: "ford",
  topSpeed:200,
  printInfo: function (){
    console.log(this.nameCar, this.topSpeed)
  }
}
//czy wartość zmiennej nameCar w obiekcie car istnieje
console.log(Reflect.has(car, "nameCar"))//true
console.log(Reflect.has(car, "brand"))//false

//ustawiamy nową property dla obiektu
Reflect.set(car, "brand", "test");
console.log(Reflect.has(car, "brand"))//true

console.log(Reflect.ownKeys(car))// ['nameCar', 'topSpeed', 'printInfo', 'brand']

Reflect.deleteProperty(car, "brand")
console.log(Reflect.has(car, "brand"))//false

function Test(a,b){
this.a = a,
this.b = b
}
const obj = Reflect.construct(Test, [1,5])
console.log(obj)//Test {a: 1, b: 5}