class FormValidator{
  constructor(){
    this.formFields = [];
    this.form = document.getElementById("form");
    this.init();
  }

  init(){
    this.form.addEventListener("submit",(e)=>{
      e.preventDefault();

      this.validateForm()
    })
  }

  validateForm = () =>{
    const formResults = this.formFields.map( f => f.validate())

    if(formResults.includes(false)){
      console.log("Błąd w formularzu")
    }else{
      console.log("Formulsrz jest dobrze wypewniony")
    }
  }
}