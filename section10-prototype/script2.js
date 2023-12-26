//166. Prototyp a instancja obiektu
console.log('166. Prototyp a instancja obiektu')
/*
Zmieniony prototyp jest aktualny dla wszystkich instancji, ale nie gdy przypisany jest biekt
*/
function Car(name){
  this.name = name;
}

Car.prototype.brand = 'ford'
//mustang i f150 wskazują na poprzednią referencje prototypu
let mustang = new Car('Mustang')
let f150 = new Car('F150')

Car.prototype.price = 120500;
console.log(mustang.constructor) // Car()
console.log(mustang.price)//120500
console.log(f150.price)//120500

//zmieniamy naszą referencje dla naszego prototypu i nowe powstałe instancje będą miałe ten prototyp (obiekt {weight: 2000})
Car.prototype = {weight: 2000};//przypisanie obiektu, zmieni informację o konstruktorze
let dodge = new Car('Doge')
console.log(dodge.brand)//undefined , nie ma w nowym prototypie
console.log(dodge.weight)//2000 , wskazuje na nowy prototyp
console.log(f150.price)//120500 , wskazuje na stary prototyp


console.log(dodge.constructor)//ƒ Object() { [native code] } nipoprawna informacja (dostęp do konstruktora zniknie przez przepisanie prototypu Car.prototype = {weight: 2000};)
console.log(Car.prototype.constructor)//Object() { [native code] } nipoprawna informacja
/*
Jeżeli podstawiamy do prototypu nowy obiekt (przykład Car.prototype = {weight: 2000}),
to zawsze musimy również uzupewnić Car.prototype.constructor = Car;
*/
Car.prototype.constructor = Car;//nadpisujemy aby informacja była prawidłowa
console.log(dodge.constructor)//Car(), prawidłowo

/*
Nadpisując prototyp obiekterm tracimy informację o użytym konstruktorze
użytym do stworzenia instancji, trzeba to poprawiać.
*/


function Car2(name){
  this.name = name;
}

Car2.prototype.brand = 'ford';
let ford = new Car2("mustang")
console.log(ford.brand)//ford

Car2.prototype = {weight: 2000}
console.log(ford.brand)//ford
console.log(ford.weight)//undefined
console.log(ford)

let pontiac = new Car2("pontiac")
console.log(pontiac.brand)//undefined
console.log(pontiac.weight)//2000
console.log(ford.__proto__ === pontiac.__proto__)//false to są rużne obiekty przepisane do prototypów
console.log(ford.constructor)//Car2()
/*
zminiliśmy  obiekt dla prototypu i stworzyliśmy nową instancje pontiak i
konstruktor będzie inny i ta informacja została utracona
(jaki konstruktor był użyty do stworzenia nowej instacji)
*/
console.log(pontiac.constructor)// Object() i to nie jest dobrze, dla tego powinni zmienić
Car2.prototype.constructor = Car2//naprawiamy efekt uboczny po nadpisaniu prototypu
console.log(pontiac.constructor)//Car2()