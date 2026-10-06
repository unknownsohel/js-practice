const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

//const heros =marvel_heros.concat(dc_heros);
//console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const arr =[1,2,3, [4,5,6],7,[8,9,[10,11]]];
console.log(arr.flat(2));
console.log(arr.flat(1));

console.log(Array.isArray("Sohel"));
console.log(Array.from("Sohel"));   
console.log(Array.from({name:"Sohel"})); // returns an empty array because the object does not have a length property


let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));