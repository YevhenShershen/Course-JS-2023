let info = "es6 module.js"

//named export , funkcja publiczna
export function foo(){
  console.log('foo from module: ' + data)
}

export function bar(){
  foo()
}

let data = 99
export default data;//domyślny export