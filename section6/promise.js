/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

138. ES6 Promise
*/



//138. ES6 Promise
console.log('138. ES6 Promise')

function processData(data){
  console.log(data)
}

function error(err){
  console.log(err)
}

fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(data => processData(data))
.catch(err => error(err))


function getJoke(){
  return new Promise(function(resolve, reject){
    const req = new XMLHttpRequest();
    const apiUrl = 'https://api.chucknorris.io/jokes/random'
    req.open("GET", apiUrl)
    req.onload = function (){
      if(req.status === 200){
        resolve (req.response)
      }else{
        reject(req.response)
      }
    }
    req.onerror = function(){
      reject (new Error("Network error."))
    }

    req.send()
  })
}

    getJoke()
    .then(data => {
      let json = JSON.parse(data)
      console.log(json)
    })


async function getData(){
  try{
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()
    console.log(data)
  }
catch (err){
console.log(err)
}
}
getData()