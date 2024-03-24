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
    this.errorMsgEl = document.querySelector(errorMsgSelector);
    this.matchWithPasswordId = matchWithPasswordId;
  }
}