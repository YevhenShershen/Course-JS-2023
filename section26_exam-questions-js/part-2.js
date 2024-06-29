/*
267. Czym jest funkcja pierwszej klasy wyższego rzędu, pure currying, unary
268. Czym jest temporal dead zone
269. Czym jest funkcja natychmiastowa
270. Czym jest hoisting
271. Czym są klasy es6
272. Czym są closures - domknięcia
273. Czym jest scope
274. Czym jest callback, callback hell etc
276. W jaki sposób można wykorzystać historię w javascript
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


//268. Czym jest temporal dead zone

/*
Temporal Dead Zone jest to przestrzeń przed deklaracją zmiennej let oraz stałej const, dzie
odwołanie się do tych wartości spowoduje błąd ponieważ nie są jeszcze zadeklarowane.
*/
function test (){
console.log(localLet)// Uncaught ReferenceError

let localLet= 10
}

//var daje undefined
function test2 (){
  console.log(localLet2)// undefined
  var localLet2 = 10
  }


//269. Czym jest funkcja natychmiastowa
/*
Funkcje natychmiastowe tzw IIFE (Immediately Invoked Function Expression) to
funkcje wywoływane natychmiast po zdefiniowaniu
*/
 (function(){
  Console.log("Jakaś logika")
 })()



 //270. Czym jest hoisting
 /*
 Hoisting (podnoszenie) to mechanizm w JavaScript, w którym deklaracje zmiennych i funkcji
  są przenoszone na początek ich zakresu (scope) podczas fazy kompilacji. Oznacza to, że
  zmienne i funkcje mogą być używane w kodzie przed ich faktyczną deklaracją w kodzie źródłowym.
 */
function test3(){
  console.log(someVar)//undefined
  console.log(someLet)//ReferenceError: Cannot access 'someLet' before initialization
  var someVar = 'abcd'
  let someLet = "abcde"
  console.log(someVar)//abcd
}



//271. Czym są klasy es6

/*
Wersja JS ES6 wprowadziła klasy, ale one nadal bazują na prototypach, dlatego
dokreśla się je jako "syntactic sugar"
*/
function Car(name, brand){
  this.name = name;
  this.brand = brand;
}

Car.prototype.info = function(){
  console.log(this.name, this.brand)
}

var car1= new Car("Dodge", "Charger")

//ten zapis jest to samo co wyżej tylko klasa
class Car {
  constructor(name, brand){
    this.name = name;
    this.brand = brand
  }

  info(){
    console.log(this.name, this.brand)
  }
}

//272. Czym są closures - domknięcia

/*
Closure to kombinacja funkcji oraz leksykalnego środowiska w której ta funkcja była zadeklarowana
wraz z jej dostępem do zewnętrzenych zmiennych poza tą funkcją. W takim wypadku funkcja ma trzy
łańcuchy zakresów: własny pomiędzy nawiasami klamrowymi, zewnętrnej funkcji wraz z jej
zmiennymi oraz globalny.

Funckja bar ma dostęp zarówno dp swojego scope jak i do scope zewnętrznej funkcji foo
przez co może korzystać z argumentu num nawet po wywołaniu foo. To jest właśnie closure.
*/

function foo(num){
  function bar(text){
    console.log(num, text)
  }
  return bar;
}

let test = foo(10)
test("test!") //100 test!


//273. Czym jest scope
/*
Scope czyli zakres określa dostęp do zmiennych, funkcji i obiektów w pewnej konkretnej części
kodu w trakcie jego wywołania. Scope determinuje widoczność zmiennych oraz innych zasobów
w określonych częściach kodu. Zakres poszczególnych zmiennych zależy też  od tego jak były
zadeklarowane:

-let, const - deklarujązmienne o zakresie bloku - block scope
-var -zakres jest ograniczony do funkcji w której zostały zadeklarowane lub do przestrzeni globalnej
jeśli deklarację mają poza funkcją.
*/



//274. Czym jest callback, callback hell etc

/*
Callback to funckja przekazywana do innej funkcji jako argument, jest wywoływana w danej funkcji
aby zakończyć jakąś akcję np.

Po co wukorzystuje się callbacki?
JS jest językiem opartym na zdarzeniach np. kliknięcie raz użytkownika wyzwoli event
click, który może być obłużony przez callback. Dzięki temu nie trzeba w programie czekać aż
coś się stanie tylko sam engine wyzwoli podaną funkcję, gdy nastąpi zdarzenie.
*/

function downloadFile(successFunc, errorFunc){
  // downloading file
  setTimeout(()=>{
    if(Math.random() > 0.5){
      successFunc(); // wywołanie gdy udało się pobrać plik
    }else{
      errorFunc(); // wywołanie gdy błąd podczas pobrania pliku
    }
  })
}

downloadFile(
  ()=> console.log("plik pobrany"),
  ()=> console.log("Błąd pobrania pliku")
)

/*
Czym jest callback w callback
Callback zagnieżdżony w innym callbacku aby wywołać jakąś akcję sekwencyjnie jedna po drugiej.
To jest callback w callback np:
*/
loadData("items", ()=>{
  console.log("artykuły załadowane");
  loadData("categories", ()=> {
      console.log("kategorie załadowane");
      loadData("promotions", ()=> console.log("promocje załadowane")
    //wystartuj skrypt sklepu internetowego
    );
  });
})

/*
Czym jest callback hell
Callback hell jest to antywzorzec kiedy występuje wiele zagnieżdżonych callbackó co utrudnia
debugowanie oraz zrozumienie kodu z asynchorniczną logiką np:
*/

async1(function(){
  async2(function(){
    async3(function(){
      //kod
    })
  })
})


//276. W jaki sposób można wykorzystać historię w javascript

/*
Obiekt history dostępny w window pozwala na skierowanie użytkownika do poprzedniej lub kolejnej
strony, które odwiedził
*/
function goBack(){
  window.history.back()
}
function goForward(){
  window.history.forward()
}