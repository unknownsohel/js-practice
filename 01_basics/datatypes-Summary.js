/* Primitive dataType

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

Reference type(Non-primitive): Array, Objects, Function

*/
const score = 100
const scoreValue = 100.5
const isLoggedIn = false
const outsideTemp = null
let userEmail //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false

const bigNumber = 34567890123456789012345678901234567890n

const heros = ['shaktiman', 'naagraj', 'doga']
let myObj ={
    name: "hitesh",
    age: 22
}
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber) //bigint