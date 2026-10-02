const score =400;
console.log(score)

const balance = new Number(100);
console.log(balance) //Number {100}
console.log(balance.toString().length) //3
console.log(balance.toFixed(1)) //100.0

console.log(balance.toPrecision(5)) //100.00

const otherNumber = 123.456789;
console.log(otherNumber.toPrecision(5)) //123.46
console.log(otherNumber.toPrecision(2)) //1.2e+2

const hund =100000000;
console.log(hund.toLocaleString());

console.log(hund.toLocaleString());
console.log(hund.toLocaleString('en-IN')); //1,00,00,000



console.log(Math);
console.log(Math.abs(-5)) //5
console.log(Math.round(4.7)) //5
console.log(Math.ceil(4.1)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.min(0,150,30,20,-8,-200)) //-200
console.log(Math.max(0,150,30,20,-8,-200)) //150

console.log(Math.random())// between 0 and 1

console.log(Math.random()*10 +1) //between 0 and 10
console.log(Math.floor(Math.random()*10 +1))

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)//between 10 and 20

