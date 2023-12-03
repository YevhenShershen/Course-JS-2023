

//144. ES6 Moduły
console.log('144. ES6 Moduły')

const data = 123
export const getData =()=> data

export let testValue = "test"
export function setTestValue(value){
  testValue = value
}

export const add =(a,b)=> a+b

let arr = [{b:3,c:4}, {b:3,c:4}]
let obj1 = {a:123}
export const newArr = arr.map(el => ({...el,...obj1})).map(({b,...el})=>({...el, b:b * 4}))

export function multiply (a,b) {
  return a * b
}

//export domyślny
export default {
  getData: getData,
  value: "Hello world"
}