//167. Tworzenie własnego łańcucha prototypów
console.log('167. Tworzenie własnego łańcucha prototypów')

/*
JavaScript nie ma klas jak inne języki programowania, ale ma prototypy,
które umożliwiają dziedziczenie. Zamiast dziedziczenia na bazie klas mamy
dziedziczenie prototypowe.

Dziedziczenie to współdzielenie pewnych funkcjonalności np. medot z innych oniektów.

Wszystko w JS prócz typów prostych jest obiektem, nawet funkcje.
Każda funkcja również metody np. call oraz apply właściwość prototype.

Domyślnie prototyp jest pustym obiektem stworzonym podaczas definicji funkcji.
Każda instancja stworzona za pomocą tego samego konstruktora będzie współdzieliła
ten sam prototyp.
*/


//Tworzenie własnego łańcucha prototypu aby uzyskać dziedziczenie

function Figure(){//figura geometryczna
  this.name = "geometryczna figura";
  this.toString = function () { console.log(this.name)}
}

function Figure2d(){
  this.name = "2d figure"
}

function Rect(x, y, sideLength){
  this.x = x;
  this.y = y;
  this.sideLength = sideLength;
  this.name = "Rect figura"
}

//zamiast dodawać poszczególne pola można
//nadpisać prototyp czymś nowym
console.log(new Figure2d()) //Figure2d => prototype Object =>constructor Figure2d()
Figure2d.prototype = new Figure()
console.log(new Figure2d())//Figure2d => prototype Figure => prototype Object =>constructor Figure()
Rect.prototype = new Figure2d()
let rect = new Rect (10, 10, 100)

console.log(rect)
//naprawiamy info o konstruktorze
Figure2d.prototype.constructor = Figure2d;
Rect.prototype.constructor = Rect;

//rect, wyłowanie toString z Figure()

console.log(rect.toString())
console.log(rect)

//instanceof sprawdza czy 'rect' jest instancją wszystkich 3 konstruktorów
console.log(rect instanceof Figure);//true
console.log(rect instanceof Figure2d);//true
console.log(rect instanceof Rect); //true
console.log(Figure2d.prototype.isPrototypeOf(rect));//true