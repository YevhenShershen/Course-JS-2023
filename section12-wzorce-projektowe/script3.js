//174. Wzorzec module
console.log('174. Wzorzec module')

/*
Module pattern - Wzorce konstrukcyjne - Creationa Patterns
Moduł jest samodzielną jednostką kodu zwykle odpowiedzialną za pojedynczą funkcjonalność
Programu. Wiele modułów może komunikować się ze sobą wykorzystając udostępnione publiczne
metody oraz zmienne.

Prywatne funkcje oraz zmienne mogą być wyłącznie używane za pośrednictwem
publicznego API modułu.

Moduł jest konstrukcyjnym oraz struktyralnym wzorcem projektowym i najczęściej w JS
tworzy się go z wykorzystaniem funkcji natychmiastowej zwracającej obiekt z publicznym API.
Prywatne API dotępne jest wyłącznie publicznemu API dzięki domknięciu (closure)
*/

const Module = (function(globalObj){
  let privData = 10;//prywatna zmienna

  return{//inerfejs publicznych metod - API
    getData:function(){
      return privData
    },
    setData: function(data){
      privData = data
    }
  }
})(window)

console.log(Module.getData())//10
Module.setData(7)
console.log(Module.getData())//7

/*
Revealing Module pattern - Wzorce konstrukcyjne - Creational Patterns

Revealing module to wariant zwykłego modułu z tą różnicą, że wszystkie
publiczne i prywatne metody oraz zmienne są zdefiniowane wewnątrz modułu.
Zwracany kiterał obiektu nie ma definicji tylko referencje do prywatnych elementów.
*/

const Module2 = (function(globalObj){
  let privData = 10
  function getPrivData(){
    return privData
  }
  function setPrivData(data){
    privData = data
  }
  return{
    getData: getPrivData,
    setData: setPrivData
  }
})(window)

console.log(Module2.getData())//10
Module2.setData(11)
console.log(Module2.getData())//11

/*
Moduły ES6 - Wzorce konstrukcyjne

ES6 ułatwił dzielenie aplikacji JS na moduły, które rezydują w oddzielnych plikach
zachowując swoją prywatność. Jeżeli czegoś nie udostępnimy z pliku za pomocą słowa
kluczowego export to będzie traktowane jako prywatna część kodu wyłącznie dla danego pliku.

Poszczególne funkcje, klasy itd możemy importować za pomocą instrukcji import.
Tak zdefiniowane moduły nie zanieczyszczają globlnej przestrzeni nazw.

Moduły można tylko importować do modułu, nie można tego zrobić w zwykłym skrypcie.
*/

