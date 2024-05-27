/*
251. Czym jest funkcja strzałkowa
252. Jaki jest najszybszy sposób na pobranie elementów z drzewa dom
253. Czym jest let. jaka jest różnica między let a var
259. Jaka jest różnica między window a document
260. Czym jest JSON
261. Jakie są możliwości pobrania elementów z drzewa dom
262. Jak można dodać oraz usunąć klasę z elementu
263. Jak uruchomić kod JavaScipt gdy drzewo DOM jest już gotowe
264. Jak odczytać wszystkie kliknięcia na stronie
265. Jak można stworzyć obiekt w javascript
*/



//251. Czym jest funkcja strzałkowa

/*
Czym jest funkcja strzałkowa tzw. arrow(lambda)?

Funkcja arrow (ES6) to proszczona funkcja nie posiadająca this, arguments czy super,
nie może być konstruktorem i najlepiej sprawdza się jako skrócony zapis zwykłych funkcji np.
przekazywanych jako argument.
*/

let add = (x, y) => x + y
add(4,3)

let arr = [1,2,3,4,5]
arr.forEach((a)=> console.log(a))

//252. Jaki jest najszybszy sposób na pobranie elementów z drzewa dom

/*
Jeżeli mamy i=dentyfikator elementu to użycie getElementById będzie najszybsze, ale posiadanie
zbyt wielu identyfukatorów nie jest najlepszym  rozwiązaniem ze względu na potarzenie styli.
Klasy css są drugim najszybszym sposobem na wybranie elementu np poprzez:
getElementByClassName()
Poniżej ranking od najszybszej do najwolniejszej metody:
-id np. #main
-klasy np. .box
-siblings: div +p
-dziecko: div > p
-potomkowie - descendant: div span
-uniwerslany selektir: *
-atrybuty: div[data-type="galary"]
-pseudoklasy div:first-child
*/


//253. Czym jest let. jaka jest różnica między let a var

/*
Let oraz const deklarują zmienną oraz stałą o zasięgu blokowym przez ich zasięg jest ograniczony
do bloku czy też wyrażenia w którym są używane. Natomiast zmienne deklarowane poprzez var mają
zasięg globalny chyba, że dyły zadeklarowane w funkcji przez co miały zasięg.


let:
-wprowadzone w wersji ES6 razem z const
-ma zasięg blokowy
-również dotyczy let hoisting ale nie są inicjowane wartością jak var z undefined.
Wywołanie zmiennej let przed jej deklaracją spowoduje błąd np: "error info is not defined"
-zdefiniowanie zmiennej let poza funkcjąNIE dodaje jej do obiektu window.

var:
-dostępne od początku istnienia JS
-ma zasięg funkcyjny
-zmiennych var dotyczy hoisting, przez co są inicjalizowane wartością undefined automatycznie
na początku funkcji
-zdefiniowanie zmiennej vat poza funkcją automatycznie dodaje jądo obiektu window.


Zasięg Funkcyjny (var)
Zmienna zadeklarowana przy użyciu var ma zasięg funkcyjny. Oznacza to, że zmienna jest dostępna
wewnątrz funkcji, w której została zadeklarowana, niezależnie od tego, gdzie w tej
funkcji się znajduje. Zmienna zadeklarowana za pomocą var jest hoistowana, co oznacza,
że jest dostępna w całej funkcji, nawet jeśli deklaracja zmiennej pojawia się później w
kodzie.

function testFunction() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 - zmienna x jest dostępna w całej funkcji
}
testFunction();


Zasięg Blokowy (let i const)
Zmienna zadeklarowana przy użyciu let lub const ma zasięg blokowy. Oznacza to, że zmienna jest
dostępna tylko wewnątrz bloku kodu, w którym została zadeklarowana (blok kodu to dowolny kod
  zawarty w {}). Zmienna nie jest dostępna poza tym blokiem. let i const również podlegają
  hoistowaniu, ale w przeciwieństwie do var, nie są inicjalizowane przed rzeczywistą deklaracją,
   co powoduje błąd referencji, jeśli zostaną użyte przed deklaracją.


   W JavaScript kolekcja to struktura danych, która pozwala na przechowywanie i zarządzanie
    wieloma wartościami w uporządkowany sposób. Do najczęściej używanych kolekcji w JavaScript
     należą tablice (Array), zbiory (Set) i mapy (Map). Każda z tych kolekcji ma swoje unikalne
      cechy i sposób działania.

    Tablica (Array): uporządkowana kolekcja indeksowanych wartości, umożliwia duplikaty.
    Zbiór (Set): kolekcja unikalnych wartości, nie pozwala na duplikaty.
    Mapa (Map): kolekcja klucz-wartość, klucze mogą być dowolnego typu
*/



//259. Jaka jest różnica między window a document

/*
Globalny obiekt window w przglądarce ma w sobie wszystkie globalne zmienne, globlne funkcje,
obiekt location, XMLHttpRequest, console, localStorage itd.

Obiekt document również jest zawarty w window jako jego właściwość i jest reprezentacją DOM
Document Object Model powstały w wyniku parsowania kodu Html. Tago html przekształcane są
na węzły - nodes, dlatego document dostarcza funkcje jak getElementById(), addEventListener(),
getElementsByTagName() itd.

document === window.document //true

window może być pominięty przy odwołaniu siędo document ponieważJS znajdzie sobie ten
obiekt na końcu w scope chain
*/

//260. Czym jest JSON

/*
JSON -  JavaScript Object Totation jest tekstowym formatem danych na bazie składni JavaScriptu,
jest stosowany w transmisji danych poprzez sieć. Mime type Jsona to application.json,
rozszerzenie pliku .json
*/

//Aby skonwertować json-a na obiekt JS stosujemy:
let obj = JSON.parse(text)

//Aby skonwertować oiekt na json-a
let strJson = JSON.stringify(obj)

//261. Jakie są możliwości pobrania elementów z drzewa dom

/*
Obiekt document dostarcza wielu funkcji do pobierania elementów z drzewa DOM:
-getElementById(identyfikator) do pobrania elementów pod id
-getElementsByClassName("klassa1") do pobranie lementów po nazwie klasy
-getElementsByTagName("div") pobiera elementy po nazwie taga
-querySelector(".box > p") zwraca pierwszy element według selektora css
-querySelectorAll("p a") zwraca elementy według selektira css
-getElementsByName() zwraca listę lementów ze względu na atrybut name
*/

//262. Jak można dodać oraz usunąć klasę z elementu
let el = document.querySelector(selector)
el.classList.add(className)
el.classList.remove(className)

//263. Jak uruchomić kod JavaScipt gdy drzewo DOM jest już gotowe
document.addEventListener('DOMContentLoaded', function(){
  //drzewo DOM gotowe
})

document.onreadystatechange= function(){
  if(document.readyState == "complete"){
    //DOM ready
  }
}

//264. Jak odczytać wszystkie kliknięcia na stronie

document.querySelector('body').addEventListener("click", function(){
  console.log("Kliknięcie")
})

//265. Jak można stworzyć obiekt w javascript

//1. Konstruktor Obiektu

let obj1 = new Object()

//2. Funkcja create Obiektu
let obj2 = Object.create(null)

//3. Literał obiektu
let obj3 = {}

//4.Funkcja konstruująca
function Item (name){
  this.name = name
}
let item1 = new Item("desk")

//5. Klasa ES6
class Car {
  constructor(name){
    this.name = name
  }
}
let cer1 = new Car("Mustang")