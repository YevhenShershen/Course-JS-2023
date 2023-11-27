/*

LISTA INFORMACJI W TYM PLIKU (MOŻNA ODSZUKIWAĆ PO TYCH TREŚCIACH)

139. ES6 Symbol - primityw
140. ES6 Domyślne parametry funkcji
141. ES6 Literały szablonu i tagi oraz nowości w String
*/



//139. ES6 Symbol - primityw
console.log('139. ES6 Symbol - primityw')

let symbol1 = Symbol('Symbol1')
let symbol2 = Symbol('Symbol1')

console.log(symbol1 === symbol2)//false
console.log(symbol1 == symbol2)//false

let obj = {
  a:10
}
obj[symbol1] = 1000
console.log(obj[symbol1])//1000
//symbole śa nie iterowalne
for(const v in obj) console.log(v)//a

console.log(Object.getOwnPropertySymbols(obj))//[Symbol(Symbol1)]



//140. ES6 Domyślne parametry funkcji
console.log('140. ES6 Domyślne parametry funkcji')

function test1(v){
  if(typeof v === 'undefined') v = 23;
  console.log(v)
}
test1()//23

function test2(a, b =44, c = {test: 'test'}){
  console.log(a, b ,c)
}
test2(10)//10 44 {test: 'test'}

//test3 przejmuje parametry i jeżeli parametry nie będą przekazane
//to ustawiamy że domyślnie idzie przekazywanie pustej tablicy "=[]"
//bo inaczej bedzie błąd "Uncaught TypeError: undefined is not iterable"
function test3([a = 1, b = 2,]= []){
console.log(a,b)
}
test3()// 1 2
test3([])//1 2
test3([10, 99])

function test4([a = 1, b = 2,]= [500,1000]){
  console.log(a,b)
  }

test4()//500 1000

function test5([a = 1, b = 2,]= [500]){
  console.log(a,b)
  }

test5()//500 2

function test6({a = 1, b = 2} = {}){
console.log(a, b)
}
test6({a:13, b:33})//13 33
test6({a:13})//13 2
test6()//1 2



//141. ES6 Literały szablonu i tagi oraz nowości w String
console.log('141. ES6 Literały szablonu i tagi oraz nowości w String')

const user = {name: "Ania", city: "Wawa"}
const txt = `Hello ${user.name} from ${user.city}. ${2+2}`
console.log(txt)

function uppercase (strings, ...values){
  console.log(strings)
  console.log(values)

  let result =""
  for(let i = 0; i < strings.length; i++){
    result += strings[i];
   if(i < values.length) {
    let v = values[i]
    if(typeof v === 'string') v = v.toUpperCase()
    result += v
  }
  }
  return result
}
const txt2 = uppercase`
Hello ${user.name}  from ${user.city}. ${2+2}
`
console.log(txt2)


const text = "Hello world!"
console.log(text.includes("world"))//true  czy zawiera lańcuch znaków to słowo
console.log(text.startsWith("Hello"))//true  od czego zaczyna się lańcuch znaków
console.log(text.endsWith("world!"))//true od końca
