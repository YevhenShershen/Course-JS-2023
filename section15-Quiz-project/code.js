window.onload = function(){
quiz.init()
}
class Quiz {
  questions = [
    {q:"ile to jest 10 / 2 ?", answers:["4", "5","4.5"], correctAnswerNum:1},
    {q:"ile to jest 16 + 2 ?", answers:["13", "18","33"], correctAnswerNum:1},
    {q:"ile to jest 8 * 2 ?", answers:["18", "10","24"], correctAnswerNum:0}
  ];

  currentQuestionIndex = -1;
  heading = null;
  questionParagraph = null;
  answer0 = null;
  answer1 = null;
  answer2 = null;
  correctAnswerNum = null;

  userSelectedInput = null;
  userCorrectAnswerNum = 0;
  userBadAnswersNum = 0;
  saveAnswerButton = null;
  nextQuestionButton = null;

init(){
this.heading = document.querySelector(".alert-heading");
this.answer0 = document.querySelector("#answer0");
this.answer1 = document.querySelector("#answer1");
this.answer2 = document.querySelector("#answer2");
this.questionParagraph = document.querySelector("#questionParagraph");

this.saveAnswerButton = document.querySelector("#saveAnswearButton");
this.nextQuestionButton = document.querySelector("#nextQuestionButton")

this.setNextQuestionData()

this.saveAnswerButton.addEventListener("click", this.checkAnswer);
this.nextQuestionButton.addEventListener('click', this.setNextQuestionData);
}

checkAnswer =()=>{

}

setNextQuestionData =()=>{
  this.currentQuestionIndex++;
  if(this.currentQuestionIndex >= this.questions.length){
    console.log("Koniec quizu")
    return
  }

  const question = this.questions[this.currentQuestionIndex];
  const qStr = `Pytanie ${this.currentQuestionIndex+1} z ${this.questions.length}: `
  this.heading.innerHTML = qStr +  question.q
  for(let i = 0 ; i < question.answers.length; i++){
    this['answer'+ i].innerHTML = question.answers[i]
  }
  this.correctAnswerNum = question.correctAnswerNum;
}
}

const quiz = new Quiz()