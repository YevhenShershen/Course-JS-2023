window.onload = function (){
  ui.init()
  ui.salaryChange()
}
//składki z pensji pracownika
class MonthlyEmployeeIncome {
  monthNum;//aktualny miesiąc
  grossAmount; //kwota brutto
  accumulatedYearlyIncomeSum;//zakumolowany dochód od początku roku
//Składka emerytalna - 9.67%
retirementContribution;
//Składka rentowa 1.5%
pensionContribution;
//Składka chorobowa: 2.45%:
sicknessContribution;
//Suma składek na ubezpieczenie społeczne finansowane przez pracownika
workerSocialContributionSum;
//Podstawa wymiaru składki na ubezpieczenue sdrowotne:
baseFroHealthContribution;
//kładka na ubezpieczenie zdrowotne 9%:
healthContribution;
//Zaliczka na podatek:
advanceTax;
//Składka zdrowotna według stawki 7.75%
healthAmountToExclude;
//Kwota netto
finalWorkerNetMoney;
//dochód który jest wynikiem pomniejszenuia o koszty uzyskania dochodu 250zł
income;
  calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum){
    if(!accumulatedYearlyIncomeSum) accumulatedYearlyIncomeSum = 0

    this.monthNum = monthNum;
    this.grossAmount = grossAmount;
    this.accumulatedYearlyIncomeSum = accumulatedYearlyIncomeSum;

    //Składka emerytalna - 9.67%
    this.retirementContribution = grossAmount * 0.0976;
    console.log('Składka emerytalna - 9.67%', this.retirementContribution);

    //Składka rentowa 1.5%
    this.pensionContribution = grossAmount * 0.015;

    //Składka chorobowa: 2.45%:
    this.sicknessContribution = grossAmount * 0.0245;

    //Suma składek na ubezpieczenie społeczne finansowane przez pracownika
    this.workerSocialContributionSum = this.retirementContribution + this.pensionContribution + this.sicknessContribution

    //Podstawa wymiaru składki na ubezpieczenue sdrowotne:
    this.baseFroHealthContribution = grossAmount - this.workerSocialContributionSum;

    //kładka na ubezpieczenie zdrowotne 9%:
    this.healthContribution = this.baseFroHealthContribution * 0.09;

    this.income = Math.ceil(this.baseFroHealthContribution - 250)

        //Zaliczka na podatek:
    if(accumulatedYearlyIncomeSum < 85528 && this.income + this.accumulatedYearlyIncomeSum >= 85528){
      //pierwszy miesiąc gdzie przekroczony jest próg 17% do 85k, 32%
      this.advanceTax = this.income * 0.17;
      console.log("Miesiąc z przekroczeniem pierwszego progu, podatek 17%: ", this.advanceTax)

      const taxAbove85k = ((this.income + accumulatedYearlyIncomeSum) - 85528) * 0.32;
      console.log("Podatek powyżej 85528: ", taxAbove85k)
      this.advanceTax += taxAbove85k;
    }else if(this.income + accumulatedYearlyIncomeSum > 85528){
      this.advanceTax = this.income * 0.32;
      console.log("Kolejny miesiąc z podatkiem 32%(zaróbki ponad 85k): ", this.advanceTax)
    }else{
      this.advanceTax = (this.income * 0.17) - 43.76;
      console.log("Zaliczka na podatek , pierwszy próg 17%:", this.advanceTax)
    }


    //Składka zdrowotna według stawki 7.75%
    this.healthAmountToExclude = this.baseFroHealthContribution * 0.0775;

    //ostateczna zaliczka na podatek dochodowy
    this.advanceTax = Math.floor(this.advanceTax - this.healthAmountToExclude)

    //Kwota netto
    this.finalWorkerNetMoney = grossAmount - this.workerSocialContributionSum - this.healthContribution - this.advanceTax;
    console.log('Kwota netto: ', this.finalWorkerNetMoney);
  }
}

const monthlyIncome = new MonthlyEmployeeIncome();

class MonthlyEmployerCost{
  grossAmount;
  monthNum;
  accumulatedYearlyIncomeSum;
//Składka na ubezpieczenie emerytalne 9.76%:
employerRetirementContribution;
//Składka na ubezpieczenie rentowe 6.5%:
employerPensionContribution;
//Składka na ubezpieczenie wypadkowe 1.67%:
employerAccidentInsurance;
//Składka na fundush pracy 2.45%:
employerWorkFundContribution;
//Składka na Fundusz Gwarnatowanych Świadczeń Pracowniczych 0.1%
employerGuaranteedWorkFundContribution;
//Suma składek pracodawcy:
employerContributionSum

  calculate(grossAmount, monthNum, accumulatedYearlyIncomeSum){
    this.grossAmount = grossAmount;
    this.monthNum = monthNum;
    this.accumulatedYearlyIncomeSum = accumulatedYearlyIncomeSum;

    //Składka na ubezpieczenie emerytalne 9.76%:
    this.employerRetirementContribution = grossAmount * 0.0976;
    //Składka na ubezpieczenie rentowe 6.5%:
    this.employerPensionContribution = grossAmount * 0.065;
    //Składka na ubezpieczenie wypadkowe 1.67%:
    this.employerAccidentInsurance = grossAmount * 0.0167;
    //Składka na fundush pracy 2.45%:
    this.employerWorkFundContribution = grossAmount * 0.0245;
    //Składka na Fundusz Gwarnatowanych Świadczeń Pracowniczych 0.1%
    this.employerGuaranteedWorkFundContribution = grossAmount * 0.001;
    //Suma składek pracodawcy:
    this.employerContributionSum = this.employerRetirementContribution
    + this.employerPensionContribution
    + this.employerAccidentInsurance
    + this.employerWorkFundContribution
    + this.employerGuaranteedWorkFundContribution
  }
}
//składki na pracownika ołacone przez pracodawca
const monthlyEmployerCost = new MonthlyEmployerCost();

class Ui{
    salaryInput;
    salaryGross; //kwota brutto
  init(){
    this.salaryInput = document.getElementById("salary");
    this.salaryInput = addEventListener('input', this.salaryChange);
  }

  salaryChange =(e)=>{
  if(e) this.salaryGross =  e.target.value;

  this.salaryGross = 2600

  if(!this.salaryGross || isNaN(this.salaryGross)) this.salaryGross = 0;
  console.log(this.salaryGross);

  monthlyIncome.calculate(this.salaryGross, 1, 0 )
  monthlyEmployerCost.calculate(this.salaryGross, 1, 0)
  this.updateDom()
  }
  tableFields = [
    'retirementContribution','pensionContribution','sicknessContribution','workerSocialContributionSum',
    'baseFroHealthContribution', 'healthContribution', 'advanceTax', 'healthAmountToExclude', 'finalWorkerNetMoney'
]

  updateDom = () =>{
    this.tableFields.forEach(el=>{
      this.setValueById(el, monthlyIncome[el].toFixed(2));
    })

  }
  setValueById(id, value){
    document.getElementById(id).innerHTML = value ;
  }
}
const ui = new Ui();