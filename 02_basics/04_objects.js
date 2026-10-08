// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sohel";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser ={
    email:"regular@example.com",
    fullname:{
        userfullname:{
            firstname:"Sohel",
            lastname:"Khan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

const obj3 = { obj1, obj2};
console.log(obj3);

//const obj4 = Object.assign({}, obj1, obj2);

const obj4 = {...obj1, ...obj2};
console.log(obj4);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

const course = {
    coursename:"JavaScript",
    price:299,
    courseInstructor:"Sohel Khan"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);


 