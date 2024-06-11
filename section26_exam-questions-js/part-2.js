/*
267. Czym jest funkcja pierwszej klasy wyższego rzędu, pure currying, unary
*/

//267. Czym jest funkcja pierwszej klasy wyższego rzędu, pure currying, unary

/*
Funkcje w JS są funkcjami oierwszej klasy, gdyż same w sobie są obiektami i mogą być
argumentem innej funkcji, mogą być zwracane z funkcji, również elementem tablicy czy
przypisywane do zmiennych.
*/

const clickHandler = ()=> {
  console.log("click");
}

document.addEventListener(click, clickHandler)

//Funkcja pierwszego rzędu w JS to taka funkcjs, która nie akceptuje funkcji
//i nie zwraca funkcji:
const functionOrderFunc = () => console.log('test')

//Funkcja wyższego rzędu akceptuje funkcję jako argument albo zwraca funkcję.
const firstOrederFunck2 = () => console.log("test")
const higherOrder = func => func();// higherOrder to funkcja wyższego rzędu (przyjmuję argument funkcję i wyłowuje ją)
higherOrder(firstOrederFunck2)

//Funkcja UNARY jest funkcja która przyjmuję jeden argument
const unaryFunc = a => console.log(a)

/*
Czym jest currying?
Currying jest procesem tłumaczenia funkcji o wielu argumentach na funkcję o jednym argumencie.
Jeśli kolejne argumenty są potrzebne funkcja o jednym argumencie zwraca kolejną funkcję.
*/
//Currying zwiększa możliwości ponownego wykorzystania funkcji
function multiply(a){
  return function(b){
    return function (c){
      return a * b * c
    }
  }
}

let mc1 = multiply(1)
let mc2 = mc1(2)
let v = mc2(3)
console.log(v)//6

let v2 = multiply(1)(2)(3)
console.log(v2)//6

/*
Czym jest czysta funkcja -pure?

Jest to funckja, która zawsze gdziekolwiek wywołana w kodzie z tymi samymi argumentami
zwróci taki sam wynik, bez skutków ubocznych. Wywołanie takiej funkcji n razy da n takich
samych wyników. Takie funkcje są o wiele prostsze w utrzymaniu/testowaniu, gdyż nie generują
efektów ubocznych
*/