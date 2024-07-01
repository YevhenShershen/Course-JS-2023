document.addEventListener("DOMContentLoaded",()=>{
  const fruits = ["Jabłko", "Cytryna", "Wiśnia", "Truskawka", "Figi","Awokado", "Kiwi"];
  const input = document.getElementById("autocomplete-input");
  const suggestionsList = document.getElementById("suggestions-list");

  input.addEventListener("input", ()=>{
    const inputText = input.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if(!inputText) return
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(inputText));

    filteredFruits.forEach(fruit=>{
      const li = document.createElement('li');
      li.textContent = fruit;
      li.addEventListener('click', ()=>{
        input.value = fruit;
        suggestionsList.innerHTML = '';
      })
      suggestionsList.appendChild(li);
    })
  })
  document.addEventListener("click",(event)=>{
    if(event.target !== input){
      suggestionsList.innerHTML = ""
    }
  })
})