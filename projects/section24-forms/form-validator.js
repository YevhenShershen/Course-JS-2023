class FormValidator{
  constructor(){
    this.formFields = [];
    this.form = document.getElementById("form");

    this.addFormField("#username", {
      minLength: 4,
      maxLength: 20,
    })

    this.addFormField("#email", {
      minLength: 4,
       maxLength: 20})

    this.addFormField("#password", {
      minLength: 4,
      maxLength: 10})

    this.addFormField("#password2", {
      minLength: 4,
      maxLength: 10,
      matchWithPasswordId: "#password"
    })

    console.log(this.formFields)

    this.init();
  }

  init(){
    this.form.addEventListener("submit",(e)=>{
      e.preventDefault();

      this.validateForm()
    })
  }

  addFormField =(cssSelector, options)=>{
    const formFIeld = new FormField(cssSelector, options);
    this.formFields.push(formFIeld);
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