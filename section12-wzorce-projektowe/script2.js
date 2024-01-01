//173. Wzorzec Singleton
console.log('173. Wzorzec Singleton')

/*
Singleton pattern - Wzorce konstrukcyjne - Creational Patterns

Jest to wzorzec ograniczający stworzenie tylko jednej instacji obiektu. Raz stworzona
instancja już zawsze będzie zwracana jako referencja np. przy próbie stworzenia kolejnej.

Zwykle stosuje się singleton przy:
-obiktach konfiguracyjnych, będących zbiorem podstawowych danych dla całej aplikacji

-połączeniach np z bazą danych, zwykle jedno jest wystarczające

-zapisywania logów z aplikacji, jedna instancja gwarantuje brak duplikatów komunikatów
*/

//PRZYKŁAD 1
let Singleton = (function(){
  let instance = null;
  let privLanguage = "en";

  function Configuration(){
    this.getLanguage = function (){return privLanguage;}
    this.setLanguage = function(lang){privLanguage = lang;}
  }

  return{
    getInstance: function (){
      if(!instance){
        instance = new Configuration()
      }
      return instance
    }
  }
})()

console.log(Singleton.getInstance().getLanguage())//en
let config = Singleton.getInstance()
config.setLanguage('pl')
console.log(config.getLanguage())//pl

let confog2 = Singleton.getInstance()
console.log(confog2.getLanguage())//pl

//PRZYKŁAD 2
let Logger = (function(){//Logger jako Singleton
let instance = null;
let logData = [];
function logMsg(str){
  logData.push({msg: str, data: new Date()})
}
function initLogger(){
  function getLogLength(){return logData.length}
  return{log: logMsg, getLogLength: getLogLength}
}
return{
  getInstance: function (){
    if(!instance){
      instance = initLogger();
    }
    return instance
  }
}
})()
const logger = Logger.getInstance()
logger.log('msg 1')
logger.log('msg 2')
logger.log('msg 3')
console.log(logger)//ma właściwość log:ƒ logMsg(str)
console.log(logger.getLogLength())

//PRZYKŁAD 3

class DBConnection {//Klasa ES6 jako Singleton
dbName = "defaultDB"
constructor(dbName){
  if(DBConnection.exist){
    console.log("DBConnection exist");
    return DBConnection.instance
  }
  DBConnection.exist = true;
  DBConnection.instance = this;
  this.dbName = dbName

  return this;
}
getFromDB(recordId){
  return {id: recordId, data: '...', dbName: this.dbName}
}
}

const dbConnection = new DBConnection('compaines')
console.log(dbConnection.getFromDB(1));
//{id: 1, data: '...', dbName: 'compaines'}
const dbConnection2 = new DBConnection("test2")
//DBConnection exist
console.log(dbConnection2.getFromDB(1))
//{id: 2, data: '...', dbName: 'compaines'}