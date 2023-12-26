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



//168. Dziedziczenie poprzez pożyczanie konstruktora
console.log('168. Dziedziczenie poprzez pożyczanie konstruktora')

function Machine (name, vendor){
  this.name = name;
  this.vendor = vendor;
  this.printInfo = function (){
    console.log(this.name, this.vendor)
  }
}
Machine.prototype.getVendor = function(){
  return this.vendor
}//dopisujemy nową właściwość do prototypu

function Vehicle(name, vendor, type, numWheels){
  //Machine.apply(this.[name,vendor])
  Machine.call(this, name, vendor);
  this.type = type;
  this.numWheels = numWheels
}Vehicle
Vehicle.prototype = new Machine();//przepisujemy do prototypu Vehicle nowąinstancję z obiektu Machine
console.log(Vehicle.prototype.constructor); //Machine()...
Vehicle.prototype.constructor = Vehicle; //ustawiamy konstruktor Vehicle na Vehicle

let car2 = new Vehicle('f150','ford','truck', 4);
console.log(car2)
console.log(car2.getVendor())//ford
car2.printInfo()//f150 ford

function Truck(name, vendor, type, numWheels,cargoType, weight){
  Vehicle.call(this, name, vendor, type, numWheels)
  this.cargoType= cargoType;
  this.weight = weight;
}
let truck = new Truck("Fmx","volvo","truck", 6 , "fuel", 10_000)
truck.printInfo()//Fmx volvo
console.log(truck)
console.log(truck.getVendor())//Uncaught TypeError: truck.getVendor is not a function