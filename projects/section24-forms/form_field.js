class FormField {
  constructor(
    formFieldSelector,
    {minLength = 3, maxLength = 11,
    errorMsgSelector,
    matchWithPasswordId
  }){
    this.formField = document.querySelector(formFieldSelector);
    this.type = this.formField.type;
    this.minLength = minLength;
    this.maxLength = maxLength;
    if(!errorMsgSelector) errorMsgSelector = `${formFieldSelector} + span`
    this.errorMsgEl = document.querySelector(errorMsgSelector);
    this.matchWithPasswordId = matchWithPasswordId;
  }

  validate =()=>{

    switch(this.type){
      case "password":
        break;
      case "test":
        if(!this.checkTextLength()) return false;
        return true;
        break;
      case "email":
        break;
    }

    return false;
  }

  checkTextLength =()=>{
    if(this.formField.value.length < this.minLength) {
      this.showError(`Wymagane minimum znaków: ${this.minLength}`);
      return false;
    }else
    if(this.formField.value.length > this.maxLength) {
      this.showError(`Maksymalnie można użyć: ${this.maxLength}`);
      return false;
    }else{
      this.showSuccess()
      return true;
    }
  }

  showError = (msg) =>{
    this.errorMsgEl.innerHTML = msg;
    this.errorMsgEl.classList.add("error");
    this.formField.classList.add("error");
    this.errorMsgEl.classList.remove("success");
    this.formField.classList.remove("success");
  }

  showSuccess = () =>{
    this.errorMsgEl.innerHTML = "";
    this.errorMsgEl.classList.remove("error");
    this.formField.classList.remove("error");

    this.errorMsgEl.classList.add("success");
    this.formField.classList.add("success");
  }

}

