window.onload = function (){
  app.init()
}

//buttons
const playWithComputer = document.getElementById('playWithComputer')
const restartGame = document.getElementById('restartGame')
const hitButtonUser1 = document.getElementById('hitButtonUser1')
const hitButtonUser2 = document.getElementById('hitButtonUser2')
const stopButtonUser1 = document.getElementById('stopButtonUser1')
const stopButtonUser2 = document.getElementById('stopButtonUser2')
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
let user1Points = 0;
let userResul = 0;
let computerResult = 0;


const styleTextSuccess = 'text-success'
const styleTextDanger = 'text-danger'
class App {
  init(){
  console.log("START App")

  restartGame.addEventListener('click', ()=>{
    buttonMenu.enebledRestartGame()
  })

  hitButtonUser1.addEventListener('click', ()=>{
      user1Points = points
    buttonMenu.startGameWithComputer(leftCardPoints,leftCardText)
  })

  stopButtonUser1.addEventListener('click', ()=>{
    buttonMenu.stopUser1Button()
  })
  stopButtonUser2.addEventListener('click', ()=>{
    buttonMenu.stopUser2Button()
  })

  nextGameButton.addEventListener('click',()=>{
    buttonMenu.resetGame()
    buttonMenu.startGame(leftCardPoints,leftCardText)

    ui.disabledNextGameButton()
  } )

  playWithComputer.addEventListener('click', ()=>{
    buttonMenu.startGame(leftCardPoints,leftCardText)
    ui.enabledButtonUser1()
  })

  ui.disabledButtonUser1()
  ui.disabledButtonUser2()
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
      this.disabledButtonUser1()
      userResul++
      this.setCardPointsStyle(leftCardPoints, styleTextDanger)
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

  resultWinner = function (){
    console.log(user1Points, points)
    if(user1Points <= points && points <= 21){
      computerResult++
      this.showResultInfo()
      this.setCardPointsStyle(leftCardPoints, styleTextDanger)
      this.setCardPointsStyle(rightCardPoints, styleTextSuccess)
      return
    }
    console.log('resultWinner2')
    user1Points++
    this.showResultInfo()
    this.setCardPointsStyle(leftCardPoints, styleTextSuccess)
    this.setCardPointsStyle(rightCardPoints, styleTextDanger)
  }

  disabledButtonUser1= function(){
    hitButtonUser1.classList.add('disabled')
    stopButtonUser1.classList.add('disabled')
  }
  disabledButtonUser2= function(){
    hitButtonUser2.classList.add('disabled')
    stopButtonUser2.classList.add('disabled')
  }

  enabledButtonUser1= function(){
    hitButtonUser1.classList.remove('disabled')
    stopButtonUser1.classList.remove('disabled')
  }

  setCardPointsStyle= function(el, text){
    el.classList.add(text)
    if(!randomCards.length) el.classList.remove(text)
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
class Computer {

  drawingСardsLogic = function(n){

      if(user1Points > points){
      console.log('INSIDE2')
      setTimeout(() => {
        buttonMenu.startGameWithComputer(rightCardPoints, rightCardText);
        this.drawingСardsLogic(n + 1)
    }, 1000);
      }else{
          ui.resultWinner()
          ui.enebledNextGameButton()
      }
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


  stopUser1Button = async function (){
    ui.disabledButtonUser1()
    store.resetRandomCards()
   await this.startGame(rightCardPoints, rightCardText)
   computer.drawingСardsLogic(0)
  }
  stopUser2Button = function (){
    // ui.disabledButtonUser2()
    // store.resetRandomCards()
    // this.startGame(rightCardPoints, rightCardText)
  }


  resetGame = function(){
    store.resetRandomCards()
    ui.resetCardContent()
    ui.enabledButtonUser1()
    ui.setCardPointsStyle(leftCardPoints, styleTextDanger)
    ui.setCardPointsStyle(rightCardPoints, styleTextSuccess)
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
const computer = new Computer()