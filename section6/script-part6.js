/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

150. ES6 Reflext api
151. ES6 Proxy api
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



//151. ES6 Proxy api
console.log('151. ES6 Proxy api')

let obj1 = {
  a:10,
  b: 99,
  str: "text"
}

const handler = {
  get(target, prop, receiver){
    if(prop === "a") return "A!!!"
    return target[prop] + "!";
  },
  set(target, prop, value){
    if(prop === "a" || prop === "b") {
      if(Number.isInteger(value)){
        target[prop] = value
      }
    }else if(prop === "str" && typeof value === "string"){
      target[prop] = value
    }else{
      console.log("WRONG DATA!")
    }
  }
}

const proxy1 = new Proxy(obj1,handler)
console.log(proxy1.a)//A!!!
console.log(proxy1.b)//99!!!
console.log(Reflect.get(proxy1, "str"))//text!

proxy1.b = 112
console.log(proxy1.b)//112!
proxy1.b = "test"
console.log(proxy1.b)//112!

proxy1.str = 23//WRONG DATA!
console.log(proxy1.str)//text!
proxy1.str = "OSA"
console.log(proxy1.str)//OSA!