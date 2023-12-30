console.log('test')
window.onload = function(){
  console.log('onload')
  let buttonsList = document.querySelectorAll('.button-click')
  const callElement=(el)=>{
    console.log(el)
    console.log(el.target.textContent
      )
  }
  for(let el = 0; el < buttonsList.length; el++){
    buttonsList[el].addEventListener('click', callElement)
  }

}