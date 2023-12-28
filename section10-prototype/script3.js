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
// console.log(truck.getVendor())//Uncaught TypeError: truck.getVendor is not a function



//169. Prototyp z Object.create()
console.log('169. Prototyp z Object.create()')
//Object.create(proto, properties) tworzy nowy obiekt wraz z prototypem

const player ={
  name: "unknown",
  login: function() {console.log(this.name + " zalogowany")},
  logout: function(){console.log(this.name)},
  printInfo: function (){console.log(this.name, this.country, this.points)}
}

//bot ma prototyp z obiektem player oraz
//dodane name i country jako właściwości
let bot = Object.create(player,{
  name:{value:"cpu player 1"},
  country: {value:"n/a"}
})
bot.points = 10;

bot.login();//cpu player 1 zalogowany
bot.printInfo()//cpu player 1 n/a 10


//Przykład
const car = {
  name:null,
  setName: function(name){this.name = name},
  getName: function(){return this.name}
}

let vehicle = Object.create(car,{
  brand:{value:"ford"},
  getBrand:{value:function(){return this.brand}}
})
console.log(vehicle)
console.log(vehicle.setName("Mustang"))
console.log(vehicle.getName(), vehicle.getBrand())//Mustang ford