/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)
98. hoisting w JavaScript
99. Temporal Dead Zone
101. Mutowalność i niemutowalność w JavaScript
102. Number - metody i właściwości
103. String - metody i właściwości
104. Array - tablice - metody i właściwości
105. Array - tablice - metody i właściwości - część 2
106. Array - tablice - metody map filter reduce every
*/


//98. hoisting w JavaScript
console.log('98. hoisting w JavaScript')

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
console.log('99. Temporal Dead Zone')

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
console.log('101. Mutowalność i niemutowalność w JavaScript')

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
console.log('102. Number - metody i właściwości')

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
console.log('103. String - metody i właściwości')

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




//104. Array - tablice - metody i właściwości
console.log('104. Array - tablice - metody i właściwości')

let arr2 = [1,2,3,4,5,6]
let tab = new Array (1,2,3,4,5, {a:12},[],'123')

tab = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

tab = [
  {name: "Kasia" , favColor: 'red'},
  {name: "Asia" , favColor: 'white'},
  {name: "Vasia" , favColor: 'yellow'}
]
tab[0] = {name: "Karolina", favColor:'black'}

tab = [1,2,3,4,5,6]
tab.push(12) // dodajemy na koniec
tab.pop()//kasuje ostatni element
tab.reverse() //odwraca tabele
tab = tab.concat([12,23,33]) // połącza tebeli

let tab2 = tab.join("-|-")
console.log(tab2)//6-|-5-|-4-|-3-|-2-|-1-|-12-|-23-|-33

tab = new Array(7)
console.log(tab)//[empty × 7] Tablica ma siedem elementów ale one są puste(ma miejsce dla elementów ale ich nie posiada)

tab = new Array(7).fill(5) //[5,5,5,5,5,5,5] Stworzyli tablice które zawiera 7 pustych miejsc i uzupewnili ich liczbą 5

//przchodzimy po wszystkich elementach w tablice
tab = [ "Ania", "Olia", "Kasia"]
//1 sposób
for (let i = 0; i <= tab.length; i++){
  const el = tab[i]
}
//2 sposób
for (let el of tab){
  console.log(el)
}
//3 sposób
tab.forEach((item, index, arr)=>{
  console.log(item, index,arr)
})




//105. Array - tablice - metody i właściwości - część 2
console.log('105. Array - tablice - metody i właściwości - część 2')

tab = [ "Ania", "Olia", "Kasia", "Karol", "Daniel"]
//szuka element i zwraca index w którym znajduje się ten element
let pos = tab.indexOf("Adam")//-1
pos = tab.indexOf("Ania")//0
//szuka od końca tablicy
tab.lastIndexOf("Ania")

//zwraca true lub false
tab.includes("Zuza")//false, nie ma takiego elementu

//sortowanie
tab.sort()

//sortować odwrotnie to
tab.sort().reverse()

//sortowanie liczb
tab = [22, 33,1,3,55,1,332]
tab = tab.sort((a,b)=> a-b)
console.log(tab)

//dodawanie elementów na początek tablicy
tab.unshift(-3,-2,-1,0)
console.log(tab)

//shift MODYFIKUJE NASZĄ TABLICE
let firstEl = tab.shift()//-3
console.log(firstEl)
console.log(tab)// [-2, -1, 0, 1, 1, 3, 22, 33, 55, 332]

//splice
/*
[].splice(start, deleteCount, item1, item2)
Metoda splice pozwala na skasowanie i dodanie za jednym
razem kilku elementów do tablicy. start określa od którego numeru indeksu zrobić
zmianę, deleteCount - ile skasować elementów, a resztaparametrów to nowe elementy do dodania.
Funkcja ta modyfikuje tablicę i zwraca skasowane elementy
*/
//drugi argument 0 oznacza że nic nie kasujemy z tabeli
tab.splice(2, 0, "ola",3,4,5)
console.log(tab)



//106. Array - tablice - metody map filter reduce every
console.log('106. Array - tablice - metody map filter reduce every')

//map
let tabMap = [1,2,3,4,5,6]
let newMap = tabMap.map((el)=> el +5)
console.log(newMap)//[6, 7, 8, 9, 10, 11]

//filter
let filtered;
filtered = newMap.filter((el) => el < 8)
console.log(filtered)//[6, 7]

//reduced
let redUce = filtered.reduce((acc,currendValue, index, arr)=>(acc+ currendValue))
console.log(redUce)//13

//every zwraca informacj czy wszystkie elementy wspewniają warunerk (zwraca true lub false)
const eVery = newMap.every(el =>el > 0)
console.log(eVery)//true

