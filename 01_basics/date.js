// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreatedDate = new Date('2023-12-12');
let myCreatedDate2 = new Date('2023-12-12 04:30:00');
console.log(myCreatedDate.getDate());
console.log(myCreatedDate2.getDate());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000)); //seconds


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', { weekday: 'long' });