// singleton
// object.create() method is used to create a new object with the specified prototype object and properties. It allows you to create an object that inherits from another object, enabling you to establish a prototype chain.

//object literals

const mySym =Symbol("key1");

const JUser ={
    name:"Sohel",
    "full name":"Sohel Khan",
    [mySym]:"mykey1",
    age:22,
    location:"India",
    email:"sohel@example.com"
}

console.log(JUser.name);
console.log(JUser["name"]);

console.log(JUser["full name"]);
console.log( JUser[mySym]);
console.log(JUser[mySym]);

JUser.email="sohel_new@example.com";
console.log(JUser.email);
//Object.freeze(JUser); // freeze the object so that it cannot be modified
JUser.email="sohel_frozen@example.com"; // This will not modify the object
console.log(JUser.email);

JUser.greet=function(){
    console.log("hello JS user");
};

console.log(JUser.greet()); 

JUser.greeting=function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JUser.greeting()); 