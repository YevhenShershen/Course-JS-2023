window.onload = function(){
app.init()
}

class App{
  winningVariants = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
  ]
  winnerLine =[]
  currentPlayer = "X"
  init(){
    document.querySelectorAll('.cell').forEach(
      cell => cell.addEventListener("click", this.cellClick)
    )
    document.getElementById('restart-game').addEventListener(
      "click",()=> this.restartGame()
      )
  }
  cellClick =(e)=>{
    this.playerTurn(e.target)
  }

  initGame(){
    this.currentPlayer = "X"

    document.querySelectorAll('.cell').forEach(el=> el.innerHTML = "")
  }

  playerTurn(el){
    if(el.innerHTML === "X" || el.innerHTML === "0") return
    el.innerHTML = this.currentPlayer;

    this.currentPlayer = this.currentPlayer == "X" ? "0" : "X"

    this.checkWinner();
   }

   checkWinner(){
    for(let i = 0; i <this.winningVariants.length; i++){
      const variant = this.winningVariants[i];

      const a = this.getCellValue(variant[0])
      const b = this.getCellValue(variant[1])
      const c = this.getCellValue(variant[2])

      if(a == '' || b == '' || c == '' ) continue;
      if(a == b && b == c){
        console.log("Zwycięsa: " + a,variant)
        this.setWinner("W grze - zwyciężył " + a)
        this.winnerLine = variant
        this.addStylesWinnerLine(variant)
      }
    }
   }

   setWinner(str){
    document.getElementById("winner").innerHTML = str
   }

   getCellValue(index){
    return document.querySelector(`.cell[data-index='${index}']`).innerHTML;
   }
   addStylesWinnerLine(line){
    line.map(el=>{
      document.querySelector(`.cell[data-index='${el}']`).classList.add("aqua")
    })
   }
   removeStylesWinnerLine(line){
    line.map(el=>{
      document.querySelector(`.cell[data-index='${el}']`).classList.remove("aqua")
    })
   }
   restartGame(){
    this.initGame();
    this.removeStylesWinnerLine(this.winnerLine)
   }
}
const app = new App()