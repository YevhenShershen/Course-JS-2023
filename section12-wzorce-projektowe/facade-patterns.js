
/*
Fasada jest to wzorzec projektowy oddzilający klienta od kompleksowej funkcjonalności
dostarczanej przez jedną lub wiele części skomplikowanego systemu.

Zwykle jest to obiekt udostępniający interfejs do większego zbioru kodu, dzięki czemu:
-upraszczamy korzystanie z gotowych kawałków kodu np bibliotek
-część skomplikowanego kodu może być ukryta za fasadą co nie wymaga wiedzy aby skorzystać
z danego rozwiązania, często korzystające wielowarstwowy system. Szczególnie, gdy wymaga to
interakcji np z bazami danych czy dodatkowej logiki np określenia oceny kredytowej itd.
*/

/*
Przykładem fasady może być ocena zdoności kredytowej, jedna funckja applyFor przejdzie
automatycznie przez wszystkie etapy: oceny ryzyka, zdolności kredytowej itd i na końcu zwróci
prosty wynik przeznać kredyt lub nie.
*/
function CreditRequest(data){
  this.data = data
}
//tworzymy konstruktor CreditHistoryCheck
function CreditHistoryCheck(creditRequest, amount){
  this.check = function(){
    //sprawdzenie creditRequest
    return true;//jakaś logika
  }
}
//tworzymy konstruktor RiskCheck
function RiskCheck(creditRequest, amount){
  this.check = function(){
    if(creditRequest.salary / 100 *10 * 12 > amount){
    return true;//jakaś logika
  }else return false
}
}

CreditRequest.prototype.applyFor = function (amount){
  console.log('123',this.data, amount)
  let result = "approved"

  let riskCheck = new RiskCheck(this.data, amount)

  if(riskCheck.check() === false) result = "not approved"

  let creditHistoryCheck = new CreditHistoryCheck(this.data, amount)
  if(creditHistoryCheck.check() === false) result = "not approved"

  return result
}
let creditRequest = new CreditRequest({name: "Karol",salary: 3_000});
console.log(creditRequest)
let result = creditRequest.applyFor(2_000)
console.log(result)