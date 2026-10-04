// arrays

const myArr = [0,9,2,3,4,5]
console.log(myArr[1]);

const myHeroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Spider Man', 'Iron Man', 'Hulk', 'Thor', 'Black Panther', 'Captain America'];

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0]);


// Array methods
myArr2.push(6);
myArr2.push(8);
myArr2.pop();
myArr2.unshift(10);
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

console.log(myArr2.indexOf(3));
console.log(myArr2.includes(4));

const newArr = myArr2.join();
console.log(newArr);
console.log(typeof newArr);


//slice splice
console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3);// does not change the original array

console.log("myn1 ", myn1);
console.log("B ", myArr2);


const myn2 = myArr2.splice(1,3); // changes the original array
console.log("myn2 ", myn2);
console.log("C ", myArr2);