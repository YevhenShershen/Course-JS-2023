/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

116. Drzewo DOM - document.getElementById
117. Drzewo DOM - document.querySelectorAll
118. Drzewo DOM - document.getElementsByTagName
119. Drzewo DOM - document.createElement
120. Drzewo DOM - zdarzenie klik w oknie przeglądarki
121. Drzewo DOM - zdarzenie input
122. Drzewo DOM - zdarzenia myszy
123. Format JSON
124. Funkcja fetch do pobrania danych z internetowego api
125. Losowy żart z serwera
*/


//116. Drzewo DOM - document.getElementById
console.log('116. Drzewo DOM - document.getElementById')

/*
Obiekt document dostepny w praeglądarce i reprezentuje sparsowany
dolument html tzw. Document Object Model, czyli DOM
*/

let div = document.getElementById('content');
console.log(div)

div.style.color = 'red'
div.innerHTML = '<b>Hello world!</b>'//zmieniamy tekst w div i dodajemy pogrubienie



//117. Drzewo DOM - document.querySelectorAll
console.log('117. Drzewo DOM - document.querySelectorAll')

/*
document.querySelectorAll() -pobranie wielu
elementów html ze względu na selektor css
document.querySelecto() - pobranie jednego
*/

let liItem = document.querySelector("li.menu-item")
console.log(liItem)

liItem.style.fontWeight = "bold"

let liList = document.querySelectorAll('ul li.menu-item')
for(let i = 0; i < liList.length; i++){
  const el = liList[i]
  el.style.color = 'green'
}
console.log(liList)




//118. Drzewo DOM - document.getElementsByTagName
console.log('118. Drzewo DOM - document.getElementsByTagName')

/*
pobieranie listę elementów ze względu na nazwę taga html
*/

 liList = document.getElementsByTagName("li")
 for(let i = 0; i < liList.length; i++){
  const el = liList[i]
  el.style.color = "blue"
 }



 //119. Drzewo DOM - document.createElement
 console.log('119. Drzewo DOM - document.createElement')

 let p = document.createElement("div")
p.innerHTML = "Hello! I  am new element"
div = document.getElementById('content');
div.appendChild(p)



//120. Drzewo DOM - zdarzenie klik w oknie przeglądarki


/*
zdarzenie click myszy podpinamy
na obiekcie document
*/

let mouseClick = document.createElement("p")
mouseClick.innerHTML = "Click me!"

document.getElementsByTagName ("body")[0].appendChild(mouseClick)
document.addEventListener("click", function(event){
  console.log(event)
  console.log(event.clientX, event.clientY)//X idzie z lewo na prawo . Y idzie z góry na dów
})


mouseClick.addEventListener("click", (event)=>{
  console.log("mouse Click")
})



//121. Drzewo DOM - zdarzenie input
console.log('121. Drzewo DOM - zdarzenie input')

const input = document.querySelector("input")
input.value = "hello World!"

const area = document.querySelector("textarea")
area.value = "Content...."

input.addEventListener("input", (event)=>{
  console.log(event.target)
  console.log(event.target.value)
})

area.addEventListener("input", (event)=>{
  console.log(event.target)
  console.log(event.target.value)
})



//122. Drzewo DOM - zdarzenia myszy
console.log('122. Drzewo DOM - zdarzenia myszy')

/*zdarzenia myszy */

const mouseEvent = document.getElementsByTagName("p")[0]
mouseEvent.addEventListener("mouseenter",()=>{
  console.log("mouseenter")
})

mouseEvent.addEventListener("mousemove",()=>{
  console.log("mousemove")
})

mouseEvent.addEventListener("mouseleave",()=>{
  console.log("mouseleave")
})




//123. Format JSON
console.log('123. Format JSON')

/*
Format JSON czyli JS Object Notation
to prosty i czytelny format danych , często
stosowany w komunikacji internetowej
*/

let dataJSON = '{"name":"John", "age":30, "car":null}'
let obj2 = JSON.parse(dataJSON)
console.log(obj2 , obj2.name)

let jsonSTR = JSON.stringify(obj2)
console.log(jsonSTR)

//bardziej czytelny JSON z tymi argumentami
let jsonSTR2 = JSON.stringify(obj2, null, 4)
console.log(jsonSTR2)




//124. Funkcja fetch do pobrania danych z internetowego api
console.log('124. Funkcja fetch do pobrania danych z internetowego api')

const url = "https://swapi.dev/api/people/1/";
fetch(url)
.then(response => response.json())
.then( showData);

function showData(data){
  console.log(data)
}




//125. Losowy żart z serwera
console.log('125. Losowy żart z serwera')

const urlChuck = 'https://api.chucknorris.io/jokes/random'

window.onload = function (){
  let div = document.querySelector('#joke')
  setInterval(() => getJoke((data)=>{
    // console.log(data);
    div.innerHTML = data.value
  }),10000)
}

function getJoke(callback){
  fetch(urlChuck)
  .then(response => response.json())
  .then(callback) //callback bedzie wywłowany kiedy dane będą sparsowane
}

