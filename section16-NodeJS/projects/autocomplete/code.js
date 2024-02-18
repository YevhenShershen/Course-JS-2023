window.onload = function (){
autocomplete.init()
}

class Autocomplete{
  input = null;
  autoCompleteList = null;

init(){
  this.input = document.querySelector('.input')
  this.autoCompleteList = document.querySelector('.auto-complete-list')

  this.input.addEventListener("input", (e)=>{
  this.removeAllListItems()
  this.fetchTickers(e.target.value)
  })
}

fetchTickers(keywords){
  const API_KEY = '4FJPJMYZ7PAKGY0V'
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`
  if(!keywords) return;

  fetch(url)
  .then(response => response.json())
  .then(data => this.parseData(data))
}

parseData(data){
  console.log(data)
  if(!data.bestMatches) return;

  data.bestMatches.forEach(element=>{
    const name = element["1. symbol"] + " " + element["2. name"];
    const li = this.makeListItem(name);
    this.autoCompleteList.appendChild(li)
  })
}

makeListItem(data){
  const li = document.createElement('li');
  li.classList.add("list-item")
  li.innerHTML = data;

  return li
}

removeAllListItems(){
  this.autoCompleteList.innerHTML = "";
}
}

const autocomplete = new Autocomplete();