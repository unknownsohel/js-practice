const name = "sohel"
const repoCount =50;
console.log(name + repoCount + " Value"); //sohel50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("gta") // String decleration

console.log(gameName.__proto__) //String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}


console.log(gameName.length) //3
console.log(gameName.toUpperCase()) //GTA
console.log(gameName.charAt(2)) //a
console.log(gameName.indexOf('t')) //1

const newString = name.substring(0,2);
console.log(newString) //so

const anoString = name.slice(-5,2);
console.log(anoString) //so

const anotherString = "     sohel    ";
console.log(anotherString);
console.log(anotherString.trim()); //sohel
console.log(anotherString.trimStart()); //sohel
console.log(anotherString.trimEnd()); //sohel

const url = "https://www.youtube.com/watch?v=1gk2j3k4l5m"

console.log(url.replace('.com','.in'));
console.log(url.includes('youtube')); //true
console.log(url.split('t'))