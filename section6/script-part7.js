/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

155. ES12 EcmaScript 2021
156. ES13 EcmaScript 2022
*/

console.log("=======================SCRIPT-PART-7.JS===========================")

//155. ES12 EcmaScript 2021
console.log('155. ES12 EcmaScript 2021')

let num = 100_000_000;//możemy rodzielić liczbę _ że bybyło czytelnie i to nie powoduje błąd
console.log(num)//100000000

let num2 = 10.234_45
console.log(num2)//10.23445

//Zamieniamy lietere 'A' na litere "K"
console.log("Ania Anna Ola Karol".replaceAll("A", "K"))//Knia Knna Ola Karol

//Weak reference
const objWeak = new WeakRef({
  data:10, str:'text'
}
)
//bez deref() nie da się odłować się do obiektu
console.log(objWeak.deref())//{data: 10, str: 'text'}
console.log(objWeak.deref().data)//10

//Promise Any
const promises = [ Promise.resolve("ok"), Promise.reject("great"), Promise.resolve("nice")]
//any
let result = Promise.any(promises)
.then(result => console.log(result))
.catch(err => console.log(err))
console.log(result)

//logical assignment operators
let a = 10;
let b = 15;
//if(a) a = b niżej krótszy zapis naszego if
a &&= b
console.log(a)//15

let c = null;
let d = 10;
if(!c) c = d
c ||= d // jeżeli w 'c' jest falsy value to przypisz 'd' do 'c'
console.log(c)//10

let e = undefined; // null
let f = 34;
e ??= f
console.log(e)//35



//156. ES13 EcmaScript 2022
console.log('156. ES13 EcmaScript 2022')
class Car {
  constructor(){
    this.name = "Mustang";
    this._brand = "Ford";
    this.onClick = this.#clicked;
  }

    static PI = 3.14
    static #TEXT = 'TXT'

      //public instance field
      color = "red";
      topSpeed = 250;
      currentOfficialPrice = 200_000;
    //tworzymy prywatne pole (private instance field)
      #currentPrice = 123_000;
      printInfo =()=>{
        console.log("currentOfficialPrice", this.currentOfficialPrice)
        console.log("#currentPrice", this.#currentPrice)
        console.log('#TEXT', Car.#TEXT)//TXT
      };
      //tworzymy prywatną funkcje
      #clicked =()=>{
        console.log('car clicked ' , this.name)
      }
      //statyczna metoda
     static staticCallNewCarName =()=>{
        console.log("new Car is ", this.name)
      }
      static getNewCar =()=>{
        return new Car()
      }
}
let car = new Car()
console.log(car._brand)//Ford
console.log(car.color)//red
console.log(car.year)//undefined
console.log(car.currentOfficialPrice)//200000
// console.log(car.#currentPrice)//SyntaxError: Private field '#currentPrice' must be declared in an enclosing class
car.printInfo()
/*
currentOfficialPrice 200000
#currentPrice 123000
*/
car.onClick()//car clicked  Mustang
setTimeout(car.onClick,2000)//car clicked  Mustang
console.log(Car.PI)//3.14
console.log(car.PI)//undefined
console.log(Car.staticCallNewCarName())//new Car is  Car
console.log(Car.getNewCar())//Car {color: 'red', topSpeed: 250, currentOfficialPrice: 200000, #currentPrice: 123000, #clicked: ƒ, …}

//Top lvl await
