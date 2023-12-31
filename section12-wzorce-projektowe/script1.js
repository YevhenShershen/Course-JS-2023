//172. Wzorzec prototyp
console.log('172. Wzorzec prototyp')

/*
Prototype - Wzorce konstrukcyjne- Creational Patterns
Dziedziczenie prototypowe pozwala na współdzielenie funkcji oraz zmiennych w JS
pomiędzy instancjami obiektów co zmniejsza zapotrzebowanie na pamięć, nie muszą
być przechowywane w każdej instancji.
*/

function User(name, city){
  this.name = name;
  this.city = city;
}
User.prototype.printInfo = function (){//współdzielona funkcja pomiędzy instancjami
console.log(this.name, this.city)
}

const user1 = new User("Ania", "Warszawa")
user1.printInfo();//Ania Warszawa
const user2 = new User("Tomek", "Gdansk")
user2.printInfo();//Tomek Gdansk

/*
Wzorzec na bazie prototypu pozwala na tworzenie obiektu, który będzie podstawą
dla innych obiektów dzięki dziedziczeniu na bazie prototypów.
*/

function Shop(name, address){
  this.name = name;
  this.address = address;
  this.shoppingCart = []
}
Shop.prototype.addToCart = function (name, price){
  this.shoppingCart.push({name, price})
}

function Pharmacy(name, address){
  Shop.call(this,name,address)
}
//odziedziczy wszystkie funkcje z prototypy sklepu
Pharmacy. prototype = Object.create(Shop.prototype);
Pharmacy.prototype.constructor = Pharmacy;//żeby był prawidłowy
Pharmacy.prototype.processRecipe = function(recipe){
  console.log("Do somthing with recipe")
}

let p = new Pharmacy("Apteka 1", "Wawa");
p.addToCart("Witamin B", 30);
p.processRecipe("recepta");
//do something with recipe
console.log(p)