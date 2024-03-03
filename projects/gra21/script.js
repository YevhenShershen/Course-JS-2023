window.onload = function (){
  app.init()
}

//buttons
const playWithComputer = document.getElementById('playWithComputer')
const restartGame = document.getElementById('restartGame')

const leftCardText = document.getElementById('left-card-text')
const cardPoits = document.getElementById('cardPoits')
const randomIds = []
let randomCard;
let points = 0;

class App {
  init(){
  console.log("START App", store.giveCard())
  buttonMenu.startGameWithComputer()
  restartGame.addEventListener('click', ()=>{
    buttonMenu.restartGame()
  })
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
    randomCard = this.addIdToElement()[randomId]
    }
  }


class Ui{
  showCardDeal = function(){
    console.log('TEST',randomCard.name)
    leftCardText.innerHTML = `${randomCard.name}`
  }
  showPoints = function(){
    console.log(points , randomCard.value)
    cardPoits.innerHTML = `POINTS: ${points + randomCard.value}`
  }

}



class ButtonMenu {
  startGameWithComputer = function(){
      playWithComputer.addEventListener('click', ()=>{
      playWithComputer.classList.add('disabled')
      store.giveCard()
      ui.showCardDeal()
      ui.showPoints()
      })
  }
  restartGame = function(){
    playWithComputer.classList.remove('disabled')
  }
}

const buttonMenu = new ButtonMenu()
const store = new Store()
const app = new App()
const ui = new Ui()