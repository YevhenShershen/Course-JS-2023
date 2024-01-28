//175. Wzorzec Factory
console.log('175. Wzorzec Factory')

/*
Factory patter - Wzorce konstruktcyjne - Creational Patterns

Fabryki mają na celu tworzenie nowych instancji obiektów. Ich głowną zaletą jest
prostota ich użycia przez developera, nie musi znać nazw obiektów, które chce połować
do życia.

Wszelkia logika związana z powstaniem oraz inicjalizacją instancji pozostaje w fabryce, co jest
dużą zaletą jeśli to złożony proces np zależny od specyficznej konfiguracji aplikacji.

Nie jest wymagane użycie konstruktora do powołania obiektu, zwykle udostępniny jest interfejs
w postaci funkcji zwracających gotowe obiekty.
*/

/*
Simple factory
Prosta fabryka to obiekt, który zawiera w sobie funkcję tworzącą instancje obiektu, oddzilając
ją od reszty kodu aplikacji. Funkcje fabryk nie wymagają również użycia słowa kluczowego
new co dodakowo upraszcza cały proces.
*/

//Przykład 1
function animalFactory(name){
  //round  zaokrągla to najbliższej całkowitej liczby
  let roundId = Math.round(Math.random()*1000);
  return{
    name: name,
    id: roundId,
    info: function(){
      console.log("I`m animal: " + this.name +" , uniq id: " + this.id )
    }
  }
}
const dog = animalFactory("pies")
dog.info()//I`m animal: pies , uniq id: 411

//Przykład 2
function AdminUser(email, password, rank){
  BasicUser.call(this, email,password);
  this.rank = "admin"
}

function BasicUser(email,password){
  this.email = email;
  this.password = password;
  this.rank = "user"
}

let UserFactory = {
  getUser: function(email){
    return new BasicUser(email, "qwerty");
  },
  getAdmin(email, password){
    return new AdminUser(email, password, "admin")
  }
}

//Fabryka może zwracać różne obiekty zależnie od potrzeb

let user1 = UserFactory.getUser("user1@example.com")
console.log(user1)
//{email: 'user1@example.com', password: 'qwerty', rank: 'user'}
let admin = UserFactory.getAdmin("admin@example.com", "123")
console.log(admin)// {email: 'admin@example.com', password: '123', rank: 'admin'}

/*
Factory method

Facroty method tworzy nowy obiekt według wymagań  użytkownika, zwykle udostępniając
metodę zwracającą obiekt. Metoda ta sama decyduje jaką nową instancję obiektu powołać,
zwykle na podstawie przekazanych argumentów.

Celem factory method jest łatwa rozbudowa fabryki, zwykle używane są przy tworzeniu
oraz manipulowaniu różnymi typami obiektów, ale nadal mającymi pewne wspólne charakterystyki
czyli metody i właścowiści.
*/

let UserFactory2 = { //Factory Method
getUser: function( rank){
  let employee;
  let email = rank+(Math.round(Math.random()*100)) + "@emaple.com"
  switch(rank){
    case "user":
    employee = new BasicUser(email, "startPassword");
    break;
    case "admin":
      employee = new AdminUser(email, "startPassword", "admin");
    break
  }
  employee.trainingRequired = true;
  employee.info = function(){
    console.log(employee.name)
  }
  return employee
}
}

let user2 = UserFactory2.getUser("user")
console.log(user2)// {email: 'user49@emaple.com', password: 'startPassword', rank: 'user', trainingRequired: true, info: ƒ}
let admin2 = UserFactory2.getUser("admin")
console.log(admin2)//{email: 'admin11@emaple.com', password: 'startPassword', rank: 'admin', trainingRequired: true, info: ƒ}


