
//98. hoisting w JavaScript
/*
Hoisting to przepisanie wszystkich deklaracji zmiennych na początek funkcji,
natomiast przypisania wartości pozostają na swoim miejscu.
Dodatkowo funkcje też przenoszone są na początek programu
*/
function test1(){
  console.log(a)//undefined
  var a = 10;
  console.log(a)//10
}
function test1InPractise(){
  var a;//undefined
  console.log(a)//undefined
  a = 10;
  console.log(a)//10
}
test1()

//hoisting dla funkcji
// test3()
// function test3(){
//   console.log('hoisting function')
// }

// console.log(b) // ReferenceError: Cannot access
// let b;
// console.log(b) //undefined



//99. Temporal Dead Zone
/*
Poza blokiem zmienna let może być używana , ale gdy wewnątrz istnieje deklaracja
 let z tą samą nazwą  to powstaje przestrzeń, gdzie zmienna z poza bloku
 nie może być użytatzw. Tempolar Dead Zone
*/

// let y = 5;
// if(1 == 1){
//   console.log(y) //Tempolare Dead Zone
//   //ReferenceError: Cannot access 'y' before initialization
//   let y = 10
// }



//101. Mutowalność i niemutowalność w JavaScript
/*
W JS tylko obiejty i tablice tak naprawdę nadpisują
swoją wartość, czyli są mutowalne. Natomiast prymitywy,
gdy są zmieniane to w praktyce kasowana jest  poprzednia wartość i przypisyłana
nowa, czyli nazwa zmiennej/stałej wskazuje na nowe miejsce w pamięci dla prymitywów
*/
// let str = "Hello world"
// str[0] = 'R' // Prymityw string nie jest mutowalny, nie można modyfikować
// console.log(str[0]) //H

const arr = [1,2,3,4,5]
arr[0] = 11 //Tablica jako obiekt jest mutowalna, można modyfikować
console.log(arr) //[11,2,3,4,5]

// arr = {} //TypeError: Assignment to constant variable. (Nie można przpisywać inny objekt )



//102. Number - metody i właściwości
console.log(Number.parseFloat("111.33")) //111.33 = number
console.log(Number.parseInt("12323")) //12323 = number
console.log(Number.isInteger(33)) //true
console.log(Number.isInteger(33.2)) //false

console.log(Math.round(12.56)) //13 Okrągla do najbliżczej lićby
console.log(Math.round(11.33)) //11 Okrągla do najbliżczej lićb
console.log(Math.round(12.50)) //13 Okrągla do najbliżczej lićby

console.log(Math.ceil(14.01)) //15  Okrągla do góry
console.log(Math.floor(14.99)) //15 Okrągla do dołu

console.log(Math.random()) //generuje randomową liczbę
console.log(1233.3333.toFixed(2)) //1233.33 obcina liczbę po przecinku




//103. String - metody i właściwości
let strString = 'Hello world'
strString.toLowerCase()
strString.toUpperCase()
console.log(strString.charAt(0)) //H
console.log(strString.charCodeAt(0))//72 zwraca unikod naszego symbolu z tabeli "unicode table"

strString = "a b c b d b e"
console.log(strString.split(' ')) //['a', 'b', 'c', 'b', 'd', 'b', 'e']

strString = "1 2 3 4 5 6"
strString = strString.split(' ').join('|') //['1', '2', '3', '4', '5', '6']
console.log(strString) //1|2|3|4|5|6

strString = "A B C D EF D D D S D"
strString = strString.replace("D", "test")
console.log(strString)//A B C test EF D D D S D

strString = strString.replace(/D/g, "TEST")
console.log(strString)//A B C test EF TEST TEST TEST S TEST  //podmienia wszystkie D na TEST
//pobieranie fragmentów łańcucha, substring(odkąd, dokąd -1)
strString = '012345'
strString.substring(2) //'2345' zwraca od indeksu 2
strString.substring(2,5)

strString = "Kasia ma kota, Kasia ma psa"
strString.indexOf("Kasia")//0 szukaj od początku lańcucha
console.log(strString.indexOf("Kasia", 2))// szukaj od 2 go indeksu. Resultat: substr . Element znajduje sie pod indeksem 15
strString.lastIndexOf("Kasia")//15 szuka od końca lańcucha
strString.lastIndexOf("Karolina") // zwraca -1 . Oznacza że nie ma takiego w lańcucha wewnątrz lańcucha znaków

//zwraca nam lańcuch od indeksu gdzie znajduje się nasze słowko Kasia
let str2 = strString.substring(strString.lastIndexOf("Kasia"))
console.log(str2)//Kasia ma psa

