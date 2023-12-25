//163. Prototypy - podstawy

//trorzymy konstruktor Thing
function Thing(name){
  this.name = name
}
//dodajemy nowe właściwości do prototypu Thing
Thing.prototype.year = 2000;
Thing.prototype.printInfo = function(){
  console.log(this.name, this.year)
}

let telephone = new Thing("phone");
telephone.printInfo();

let tv = new Thing("tv");
tv.printInfo()
/*
Jeżeli dodamy jaki kolwiek właścowiści do prototypu danego konstruktora
to te instancje powołane na bazie tego konstruktora new uzyskują dotęp
do tych zdefiniowanych przez nas właściwości w prototypie.
Co jest  dużą zaletą ponieważ kolejne instancje będą spówdzieliwy te same właściwości.
*/

//Mechanizm działania prototypów:

function Thing2 (name){
  this.name = name;
}
Thing2.prototype.weight = 50
let telephone2 = new Thing2 ("prone");
console.log(telephone2.weight);//50
/*
-Interpreter Javascript spotyka odłowanie do słaściwości weight.
-sprawdza czy weigth istnieje w telephone2, jeśli tak to
zostanie użyta wartość z tego obiektu
-telephone2 nie ma weigth, dla tego interpreter poszuka jej w
prototype, który jest w kostruktorze tego obiektu i użyje tej wartości
telephone2.constructor.prototype.weight; //50
*/

/*
Uwaga, jeżeli w prototype nie byłoby weight to będzie szukana dalej w łańcuchu
prototypów, poniważ prototype teżjest obiektem, również ma konstruktor, która ma
swój prototype. Przeszukany będzie łańcuch prototypów, aż interpreter dotrze do
wbudowanego obiektu Object, który jet rodziecem wszystkich obiektów.
telephone2.constructor.prototype.constructor.prototype //łańcuch prototypów
*/




//164. Przesłanianie pól prototype

//pszesłonięcie weight z prototypu bezpośrednią
//właściwością weight w instancji
let smartphone = new Thing2('smartphone')
smartphone.weight = 10 //pszesłonięcie weight
console.log(smartphone.weight)//10

delete smartphone.weight; //skasowanie właściwości
console.log(smartphone.weight); //50 ponownie z prototype

Thing2.prototype.toString = function (){
  console.log('toString from prototype')
}//pszesłonięcie toString

smartphone.toString = function (){
  console.log('toString from instance')
}

console.log(smartphone)
Thing2.prototype.toString()//toString from prototype
smartphone.toString()//toString from instance

let smartphone2 = new Thing2('smartphone2')
smartphone2.toString()//toString from prototype