function name(){
    console.log("Sohel Khan");
}

name();

function addTwoNumbers(nums1 , nums2){
    console.log(nums1 + nums2);
}

addTwoNumbers(10,3);
addTwoNumbers(10,"3");
addTwoNumbers(10, null);

function addTwoNumbers1(nums1 , nums2){
    let result = nums1 + nums2;
    return result ;
}

const result = addTwoNumbers1(10, 5);
console.log(result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Sohel"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500, 600));

function calculateCartPrice1(val1, val2,...num1){
    return num1;
}

console.log(calculateCartPrice1(200, 300, 400, 500, 600));


const user ={
    username:"sohel",
    price : 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);