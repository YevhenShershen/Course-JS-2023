/*
296. Jaka jest różnica miedzy pętlami for in oraz for of
297. Jaka jest różnica między funkcjami call, apply i bind
298. Dlaczego stosuje sie JSON.
300. Czym jest operator trójelementowy. Funkcja anonimowa. Proto a prototype
304. Czym jest parametr rest oraz operator spread
306. Jak uzyskać pary kluczy i wartości enumerable obiektu.
309. Czym jest obfuscation - minimalizacja
310. Parametr a argument w funkcji
*/


//296. Jaka jest różnica miedzy pętlami for in oraz for of

//Pętla for in iteruje na kluczach enumarable obiektu:
let obj = {a:1,b:2,c:3,d:4}
for(key in obj){
  console.log(key)//a,b,c,d
}

//Pętla for of iteruje na wartościach obiektu:
let arr = [1,2,3,4,5]
for(value of arr){
  console.log(value)//1,2,3,4,5
}


//297. Jaka jest różnica między funkcjami call, apply i bind

//Funkcja call umożliwia wywołanie funkcji danego obiektu w kontekście innego obiektu
//argumenty funkcji przekazywane są po przecinku

let car1 = {
  name: "mustang",
  brand: "ford",
  info: function(year){
    console.log(this.brand, this.name, year)
  }
}

car1.info(1971)//ford mustang 1971

//  CALL
//Jeżeli mamy drugi obiek u którego właściwości się zgadzają no niema funkcji info
let car2 = {name: "charger", brand: "dodge"}
car1.info.call(car2, 1970)//dodge charger 1970

//298. Dlaczego stosuje sie JSON.
//FOrmat JSON stosuje sięw komunikacji między aplikacją internetowąa serweren


//300. Czym jest operator trójelementowy. Funkcja anonimowa. Proto a prototype
//operator trójelementowy jest krótka werja if else
let info = (4 > 3) ? "większe od 3" : "mniejsze od 3"


/*
Jaka jest róznica między proto a prototype
Obiekt __proto__ jest używany do przeszukiwania łańcucha prototypów w celu znalezienia metod czy
włąściwości. Natomiast prototype jest obiektem w celu zbudowania łańcucha prototypów __proto__
gdy tworzymy nowy obiekt za pomocąnew.

Czym jest funkcja anonimowa?
Jest to funkcja bez nazwy. Przypisywane są do zmiennych albo używane jako callbacki np dla innych
funkcji jak addEventListener etc.
*/


//304. Czym jest parametr rest oraz operator spread
//REST
const sum = (...args)=>{
  let v = 0;
  for(let i = 0; i < args.length; i++) v+= args[i]
  return v
}

console.log(sum(1,2,3,4,4,5))//19

//SPREAD
const sum2 = (a,b,c)=>{
  console.log(a,b,c)
  }
  let arr2 = [1,2,3,4]
  sum2(...arr2)//1,2,3



  //306. Jak uzyskać pary kluczy i wartości enumerable obiektu.

  const obj2= {
    a: "Hello world",
    b: 2,
    c: [1,2,3]
  }

  for (let [key, value] of Object.entries(obj2)){
    console.log(`${key}: ${value}`)
  }

  let keys = Object.keys(obj2)
  console.log(keys)//['a', 'b', 'c']


  //309. Czym jest obfuscation - minimalizacja
  /*
  Obfuscation  jest to process polegający na zamianę nazw danych zmiennych, funkcji, obiketów na proste nazwy
  i wraz z innymi operacjami utrudniającymi kod sprawiają, że zajmuje on mniej miejsca przez co strona
  szybciej się wczytuje, ukryta jest logika biznesowa i utrudnia jej odczytania i zrozumienie, reverse
  engineering jest znacząco utrudniony.

  Czym jest minimalizacja kodu - minification?
  Minimalizacja  to proces polegający na usunięciu wszystkich niepotrzebnych znaków jak nadmiarowo spacje,
  niałe znaki, komentarze, drugie nazwy zmiennych itd, wszystko co nie zmienia funkcjonalności kodu, ale
  zmniejszy jego rozmiar, jest to również typ obsucation.

  Jakie są zalety minimalizacji kodu?
  Minimalizacja zmniejsza wielkość plików co sprawia, że strony ładują się szybciej oraz jest mniejsze
  zapotrzebowanie na transfer na serwerze.

  Jaka jest róznica między ibfusctaion a kodowaniem?

  obfusctaion:
  - zmiana danych na inną formę danych
  - dane mogąbyć zdekodowane bez klucza
  - będą skonwertowane do kompleksowej formy, ciągle w pewien sposób możliwie do odczytania

  kodowanie:
  - zmiana porcji informacji do formy kompletnie nie zdatnej do odczytania bez klucza
  - klucz wymagany do zdekodowania
  - format nie da sięodczytać
  */


  //310. Parametr a argument w funkcji

  /*
  Parametr określa nazwę zmiennej przekazanej do funkcji w jej definiscji. Argument to zmienna przekazywana
  do funkcji podczas jej wywołania.
  */
 function test(parametr1, parametr2){}
 test("argument1", " argumen2")


 //314. Czym jest engine w przeglądarce v8

 /*
 Dlaczego nazywamy JS dynamicznym językiem?
 JS jest lużno typowanym językiem, inaczej nazywamy też dynamicznym językiem, ponieważ zmienne
 nie mają zgóry określonego typu, który mająprzychowywać. Każda zmienna prócz const może w dowolnej
 chwili mieć przypisaną dowolną wartość z dowolnym typem.
 */