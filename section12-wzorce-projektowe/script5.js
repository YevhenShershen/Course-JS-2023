//Odtwarzaj176. Wzorzec Fabryka z kompozycją
console.log('176. Wzorzec Fabryka z kompozycją')

/*
Factory with Composition

Fabryka z komozycją staje się coraz popularniejszym wzorcem, gdzie zamiast dziedziczenia
przydziela się do obiektu zachowania (behaviors) co ma na celu uniknięcie wielu czasem
nipotrzebnych dziedziczonych zachowań /metod etc.

Nowe podejście często określane jest jako "composition over inheritance" czyli kompozycja ponad
dziedziczenie. Daje nam to większą elastyczność niż rozszerzanie kolenych obiektów w celu
dziedziczenia.
*/

//Fabryka zachowań speaker (behaviour factory)

const speaker = function (state){
  let words = state.words || "Cześć"
  return{
    speak:function(){
      console.log(state.name + " mówi " + words)
    }
  }
}
const walker = function (state){
  return{
    walk: function(){
      console.log(state.name + " idzie.")
    },
    run: function(fastFlag){
      let txt = (fastFlag ? " szybko " : " ") + " biegnie";
      console.log(state.name + txt)
    }
  }
}
const person = function(name, age){
  let state = {
    name: name,
    age: age,
    words: "Cześć!"
  };

  //połącz wszyskie obiekty zachowań
  return Object.assign(
    state,//target
    walker(state),
    speaker(state)//doda do obiektu
  )
}
let p = person("Olek", 30)
p.speak()//Olek mówi Cześć!
p.walk()//Olek idzie.
p.run(true)//Olek szybko  biegnie