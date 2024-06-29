/*
277. Typy danych w js. zmienne niezadeklarowane a niezdefiniowane. globalne.
279. Kto stworzyl Javascript, porównanie JS do Javy, EcmaScript.
282. Jak sprawdzić czy string istnieje w innym stringu
283. Jak sprawdzić czy obiekt ma daną właściwość. jak enumerowac właściwości obiektu
285. Jak można wyświetlić aktualną datę, jak uzyskać timestamp i porównywanie dat
287. Jak dodać domyślną wartość do zmiennej. pary kluczy i wartości
289. Jak wygenerować liczby losowe oraz z podanego zakresu
291. Jak skonwertować tablicę na obiekt?
292. Czym jest ajax.
293. Czym jest PWA. jaki wyniki da dodanie: dwa 1 i string 3
294. Jak zaregować na kliknięcie back przeglądarki. jak wyłączyć menu kontekstowe?
*/



//277. Typy danych w js. zmienne niezadeklarowane a niezdefiniowane. globalne.
/*
Lista typów JS:
Number, String, Boolean, Object, undefined, null, BigInt, Symbol

nizadeklarowane - zmienne te nie istnieją w programie, gdyż nie są zadeklarowane
niezdefiniowane - takie zmienne są zadeklarowane, ale nie mają przypisanej wartości
*/

const a;
console.log('niezdefiniowane',a)//SyntaxError: Missing initializer in const declaration
console.log('nizadeklarowane',b)//ReferenceError: b is not defined
/*
Zmienne globalne - to zmienne dostępne w całym programie, czyli mają globalny scope.

Jaki jest problem z globalnymi zmiennymi?
Im więcej globalnych tym większe prawdopodobieństwo kofliktu nazw, trudniej
również debugować taki kod i wynajdywać błędy.
*/

//279. Kto stworzyl Javascript, porównanie JS do Javy, EcmaScript.

/*
Czy JS jest kompilowanym czy interpretowanym językiem?
JS jest językiem interpretowanym, interpreter czyta kod żródłowy JS, który jest
zapisany w pliku tekstowym i nstępnie jest interpretowany linijka po linijce.
Nowoczesne przeglądarki są w stanie skompilować kod JS po jego wstępnym wczytaniu
tzw. Just in Time compilation, co skutkuje skompilowanym bytekodem, który wykonuje się
znaczie szybciej niżw tradycyjnym interpreterze. Natomiast dalej kod żródwoły jest w postaci
pliku tekstowego, developer nie musi go kompilować.

Czym jest EcmaScript?
EcmaScript to standard będący bazą języka JS, ustandaryzowany przez organizację ECMA
*/

//282. Jak sprawdzić czy string istnieje w innym stringu
let str = "Hello World", subString = "World"
str.includes(subString) //true

//283. Jak sprawdzić czy obiekt ma daną właściwość. jak enumerowac właściwości obiektu

//1. Użycie operatora
let obj = {test: "abc"}
if("test" in obj) console.log(true)

//2. FUnkcja hasOwnProperty zwróci true jeżeki instacja obiektu ma podaną właściwość
//ale nie brane pod iwagę odziedziczone właściwośco
let obj2 = {test:'abc'}
if(obj.hasOwnProperty("test")) console.log(true)

//3. Porównanie do undefined
let obj3 = {test: "abc"}
if(obj.test != unedfined) console.log("test jest")



//285. Jak można wyświetlić aktualną datę, jak uzyskać timestamp i porównać datę

let date = new Date()
date.getDate()//16
date.getDay()
date.getFullYear()
date.getHours()
date.getMonth()
date.getTime() //aktualny timestamp z milisekudnami

//Jak porównywać daty?
//Do porównywania dat powinno używać timestampów czyli ilość sekund od 1 stycznia 1970 roku

let date1 = new Date('2015-05-01')
let date2 = new Date('2015-05-12')
if(date2.getTime() > date1.getTime()){
  //true date2 jest po date1 w czasie
}
//Jak można w szybki sposób uzyckać timestamp?
//Oprócz funkcji getTime w oviejcie date instiją jeszcze dwa alternatywne sposoby:
console.log(+new Date('2015-05-01'))// to samo co i date1.getTime()
console.log(+new Date())
console.log(Date.now())



//287. Jak dodać domyślną wartość do zmiennej. pary kluczy i wartości

//Jak dodać domyślną watość do zmiennej

//Если переменная a ложна (то есть имеет значение false, 0, "", null,
// undefined, или NaN), то ей присваивается значение 10.
obj.a = a ||= 10

//Если a ложно, то obj.a получит значение 10.
obj.a = a || 10

//Jak dodać oary klucz i wratość
let obj = {}
//1.
obj.key = "value1"
//2. z nawiasami kwadratowymi
obj["key2"] = "value2"
//3. z dynamiczną nazwą
const keyName = "key3"
obj[keyName] = "value3"


//289. Jak wygenerować liczby losowe oraz z podanego zakresu

/*
Za pomocą funkcji Math.random() zwracającą liczbę w przedziele od 0 (włącznie) do 1(bez 1)
np. 0.4512 Zwykle używa się jej w kombinacji z funkcją floor() która zaokrągla liczbę w dół
od najbliższej liczby całkowitej. Np aby uzyskać losową liczbę od 1 do 100 trzeba użyć kodu:
*/
(Math.random() * 100) + 1; //41.345
Math.floor((Math.random() * 100) +1) //83

//Aby wygenerować losowe liczby z zakresu min a max?
function randomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

randomInt(1, 100)//56
randomInt(1, 1000)//144


//291. Jak skonwertować tablicę na obiekt? Sortowanie i odwrotnie

const arrToSort = ['Paweł', 'Ania', 'Bartek', 'Kasia']
const arrSroted = arrToSort.sort()//['Ania', 'Bartek', 'Kasia', 'Paweł']
const arrSortedReverse = arrSroted.reverse()//['Paweł', 'Kasia', 'Bartek', 'Ania']

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f']
const obj = {...arr1}
console.log(obj) //{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f'}



//292. Czym jest ajax.
//AJAX to skrót Asynchronous JavaScript and XML


//293. Czym jest PWA. jaki wyniki da dodanie: dwa 1 i string 3
//PWA to skrót od progressive web apllications, jest to specjalny typ aplikacji mobilnych
//dostępny przez internet oraz zbudowanych w technologiach: HTML, CSS oraz JS

//Jaki będzie wynik 1+ 2 + '3'    Wynik będzie "33"



//294. Jak zaregować na kliknięcie back przeglądarki. jak wyłączyć menu kontekstowe?
//Jak zaregować na kliknięcie back przeglądarki.
window.onbeforeunload = function(){
  alert("Czy chcesz zapisać dane?")
}

//jak wyłączyć menu kontekstowe?
//Obsługując zdarzenie oncontextmenu
//<body oncontextmenu="return false;"></body>