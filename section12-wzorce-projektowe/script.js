//171. Wstęp do wzorców projektowych oraz konstruktor
console.log('171. Wstęp do wzorców projektowych oraz konstruktor')
/*
Wzorce projektowe powstały w celu stosowania sprawdzonych oraz przetestowanych
rozwiązań najpopularniejszych problemów programistycznych. Oszczędzają czas,
gdyż zawierają wskazówki jak podejść do pewnych zagadnień.

Każdy wzorzec ma nazwę oraz jest abstrakcyjny czyli niezależny od języka programowania
co ułatwia współpracę programistów, dzięki czemu programy są tworzone efektywniej, są
bardziej skalowane i mniej podatne na błędy. Mniej trzeba refaktoryzować(popraiwać)
kod, gdyż zwykle dostarczane rozwiązanie jest wystarczająco dobre i zoptymalizowane.

Z wzorcami niodłącznie związane jest pojęcie programowania obiektowego czyli zależności
między klasami oraz obiektami, możliwością dziedziczenia właściwości obiektów w JS
poprzez prototypy, stosowanie konstruktorów itd.


Wzorce projektowe można podzielić na trzy rodzaje:

-Konstrukcyjne - Creational Patterns - sqiązane z tworzeniem nowych obiektów
-Strukturalne - Structural Patterns - umożliwiają lepszą komunikację oraz współpracę
obiektów aby tworzyły spójny, kompletny system.
-Behawioralne - Behavioral Patterns - opisują metody komunikacji między obiektami oraz
ich podział obowiązków.

Wzorce projektowe czasem są bagatelizowane, ale ich znajomość pozwoli nam tworzenie
bardziej profesjonalnych rozwiązań w któtszym czasie, bez potrzeby ponownego
wynajdywania koła.
*/

/*
Wzorce konstukcyjne - Creational Patterns, związane są z tworzeniem nowych obiektów
zależnie od wymagań. Należą do nich wzorce:
-Constructor
-Prototype
-Singleton
-Module
-Simple Factory
-Factory Method
-Abstract Factory
-Builder
*/



/*
CONSTRUCTOR - Wzorce konstrukcyjne- Creational Patterns
Konstruktor to funkcja wraz z użycuem słowa kluczowego new co pozwala na powstanie nowej
instancji obiektu oraz wypełnienie jej właściwościami.
*/
function User(name, city){
  this.name = name;
  this.city = city;
  this.printInfo = function(){
    console.log(this.name, this.city);
  }
}
const user = new User("Ania", "Warszawa")
user.printInfo()//Ania Warszawa

/*
Wadą konstruktora jest dodawanie do każdej instancji właściwości/funkcji co zwiększa ilość
zużywane pamięci. Rozwiązaniem w takim wypadku są prototypy, gdzie właściwości są współdzielone.
*/

/*
Constructor w ES6 - Wzorce konstrukcyjne - Creational Patterns
Szósta wesja JS wprowadziła klasy dzięki czemu jawnie możemy zdefiniować konstruktor
podobnie jak w C++ czy Java. Trzeba pamiętać, że w praktyce i tak działają na bazie prototypów,
więc są jedynie pewnym lukrem składnikowym tzw. syntatic sugar.
*/
class Album {
  constructor (name, band){
    this.name = name;
    this.band = band
  }

  printInfo(){
    console.log(`${this.band} : ${this.name}`)
  }
}
const rhcp = new Album("Californication", "RHCP");
rhcp.printInfo();//RHCP : Californication

/*
W ES6 nowo wprowadzone klasy możemy również łatwo rozszerzać za pomocą extends, będzie taki sam efekt jak
w przypadku prototypów. Możemy wywołać również nadrzędny konstruktor przez super()
*/

class DigitalAlbum extends Album {
  constructor(name, band, shop){
    super(name,band);
    this.shop= shop;
  }
  printInfo(){
    super.printInfo();
    console.log(this.shop)
  }
}
let digitalRchp = new DigitalAlbum("Californication", "RHCP", "youtube")
digitalRchp.printInfo()
/*RHCP : Californication
 youtube*/

 