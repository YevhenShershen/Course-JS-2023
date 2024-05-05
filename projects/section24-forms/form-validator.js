class FormValidator{
  constructor(){
    this.formFields = [];

    this.form = document.getElementById("form");

    // this.addFormField("#username", {
    //   minLength: 4,
    //   maxLength: 20,
    // })

    // this.addFormField("#email", {
    //   minLength: 4,
    //    maxLength: 20})

    // this.addFormField("#password", {
    //   minLength: 4,
    //   maxLength: 10})

    // this.addFormField("#password2", {
    //   minLength: 4,
    //   maxLength: 10,
    //   matchWithPasswordId: "#password"
    // })

    this.processForm()

    console.log(this.formFields)

    this.init();
  }


  processForm =()=>{

    this.form.querySelectorAll("input").forEach( e =>{

      let minlength = e.getAttribute("minlength");
      if(!minlength) minlength = undefined;

      let maxlength = e.getAttribute("maxlength");
      if(!maxlength) maxlength = undefined;

      let matchWithPasswordId = e.getAttribute("data-match-with-password-id");
      if(!matchWithPasswordId) matchWithPasswordId = undefined;

      this.addFormField(`#${e.id}`, {
        minlength: minlength ? + minlength : 3,
        maxlength: maxlength ? + maxlength : 22,
        matchWithPasswordId: matchWithPasswordId
      }
      )
    } )

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