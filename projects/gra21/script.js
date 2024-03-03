window.onload = function (){
  app.init()
}

//buttons
const playWithComputer = document.getElementById('playWithComputer')
const restartGame = document.getElementById('restartGame')
const hitButtonUser1 = document.getElementById('hitButtonUser1')
const stopButtonUser1 = document.getElementById('stopButtonUser1')
const nextGameButton = document.getElementById('nextGameButton')


//===============================
const leftCardText = document.getElementById('leftCardText')
const rightCardText = document.getElementById('rightCardText')
const leftCardPoints = document.getElementById('leftCardPoints')
const rightCardPoints = document.getElementById('rightCardPoints')
const resultInfo = document.getElementById('resultInfo')
let randomIds = []
let randomCards = [];
let points = 0;
let userResul = 0;
let computerResult = 0;
class App {
  init(){
  console.log("START App")

  restartGame.addEventListener('click', ()=>{
    buttonMenu.enebledRestartGame()
  })

  hitButtonUser1.addEventListener('click', ()=>{
    buttonMenu.startGameWithComputer(leftCardPoints,leftCardText)
  })

  stopButtonUser1.addEventListener('click', ()=>{
    buttonMenu.stopUserButton()
  })

  nextGameButton.addEventListener('click',()=>{
    buttonMenu.resetGame()
    buttonMenu.startGame(leftCardPoints,leftCardText)

    ui.disabledNextGameButton()
  } )

  playWithComputer.addEventListener('click', ()=>{
    buttonMenu.startGame(leftCardPoints,leftCardText)
    ui.enabledButton()
  })

  ui.disabledButton()
  ui.disabledNextGameButton()
  }
}


class Store {
  cardTable = [
      {name: "Ace", value: 11, },
      {name: "Ace", value: 11, },
      {name: "Ace", value: 11, },
      {name: "Ace", value: 11, },

      {name: "King", value: 4, },
      {name: "King", value: 4, },
      {name: "King", value: 4, },
      {name: "King", value: 4, },

      {name: "Queen", value: 3, },
      {name: "Queen", value: 3, },
      {name: "Queen", value: 3, },
      {name: "Queen", value: 3, },

      {name: "Jack", value: 2, },
      {name: "Jack", value: 2, },
      {name: "Jack", value: 2, },
      {name: "Jack", value: 2, },

      {name: "10", value: 10, },
      {name: "10", value: 10, },
      {name: "10", value: 10, },
      {name: "10", value: 10, },

      {name: "9", value: 9, },
      {name: "9", value: 9, },
      {name: "9", value: 9, },
      {name: "9", value: 9, },

      {name: "8", value: 8, },
      {name: "8", value: 8, },
      {name: "8", value: 8, },
      {name: "8", value: 8, },

      {name: "7", value: 7, },
      {name: "7", value: 7, },
      {name: "7", value: 7, },
      {name: "7", value: 7, },

      {name: "6", value: 6, },
      {name: "6", value: 6, },
      {name: "6", value: 6, },
      {name: "6", value: 6, },

      {name: "5", value: 5, },
      {name: "5", value: 5, },
      {name: "5", value: 5, },
      {name: "5", value: 5, },

      {name: "4", value: 4, },
      {name: "4", value: 4, },
      {name: "4", value: 4, },
      {name: "4", value: 4, },

      {name: "3", value: 3, },
      {name: "3", value: 3, },
      {name: "3", value: 3, },
      {name: "3", value: 3, },

      {name: "2", value: 2, },
      {name: "2", value: 2, },
      {name: "2", value: 2, },
      {name: "2", value: 2, },
    ];
    addIdToElement =()=> this.cardTable.map((el,index)=> ({id: index, ...el}));

    giveCard = function(){
    let randomId;

    do{
      randomId = Math.floor(Math.random() * 52)
    }while(randomIds.includes(randomId))
    randomIds.push(randomId)
    randomCards.push(this.addIdToElement()[randomId])
    }

    resetRandomCards = function (){
      randomCards = []
      randomIds = []
    }
  }


class Ui{
  showCardDeal = function(textHtmlEl){
    textHtmlEl.innerHTML = randomCards.map(el => `${el.name}`)
  }

  showOverPoints = function(points){
    if(points > 21){
      this.disabledButton()
      userResul++
      this.setCardPointsStyle()
      this.showResultInfo()
      this.enebledNextGameButton()
    }
  }

  showPoints = function(elem){
    points = randomCards.map(el =>el.value).reduce((accumulator, currentValue) => accumulator + currentValue)
    elem.innerHTML = `POINTS: ${points}`

    this.showOverPoints(points)
  }

  showResultInfo = function (){
    resultInfo.innerHTML = `RESULT: ${userResul} | ${computerResult}`
  }

  disabledButton= function(){
    hitButtonUser1.classList.add('disabled')
    stopButtonUser1.classList.add('disabled')
  }

  enabledButton= function(){
    hitButtonUser1.classList.remove('disabled')
    stopButtonUser1.classList.remove('disabled')
  }

  setCardPointsStyle= function(){
    leftCardPoints.classList.add('text-danger')
    if(!randomCards.length) leftCardPoints.classList.remove('text-danger')
  }

  resetCardContent = function (){
    leftCardPoints.innerHTML = `POINTS:`
    leftCardText.innerHTML = ''
    rightCardPoints.innerHTML = `POINTS:`
    rightCardText.innerHTML = ''
  }

  disabledNextGameButton = function (){
    nextGameButton.classList.add('disabled')
  }
  enebledNextGameButton = function (){
    nextGameButton.classList.remove('disabled')
  }
}



class ButtonMenu {
  startGameWithComputer = function(htmlEl,text){
      playWithComputer.classList.add('disabled')
      store.giveCard()
      ui.showCardDeal(text)
      ui.showPoints(htmlEl)
  }

  enebledRestartGame = function(){
    playWithComputer.classList.remove('disabled')
  }


  stopUserButton = function (){
    ui.disabledButton()
    store.resetRandomCards()
    this.startGame(rightCardPoints, rightCardText)
  }


  resetGame = function(){
    store.resetRandomCards()
    ui.resetCardContent()
    ui.enabledButton()
    ui.setCardPointsStyle()
  }


  startGame = function (el, text){
    buttonMenu.startGameWithComputer(el, text)
    setTimeout(()=>{
      buttonMenu.startGameWithComputer(el, text)
    },1000)
  }
}

const buttonMenu = new ButtonMenu()
const store = new Store()
const app = new App()
const ui = new Ui()