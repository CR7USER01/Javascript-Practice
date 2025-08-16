// primitive 

// 7types : string, number , boolean , null(empty), undefined, symbol, objectb  bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id === anotherId);  // ID AND ANOTHER ID ARE NOT SAME.

const bigNumber = 12345678901234890n  // BigInt

// REFFERANCE (NON PREMITIVE )

//Array , objects , functions

const heros  = ["shaktiman", "krish", "spiderman", "messi", "ronaldo", "jitu", "bking"]
let newObj = {
    name: "ronaldo",
    age:40,
}

const myFunction = function(){
    console.log = ("hello world");
    
}
//console.log(typeof heros)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (premitive) vs heap (non primitive)

// stack : 1. fast access 2. fixed size 3. stored in LIFO (last in first out) order
// heap : 1. slow access 2. dynamic size 3. stored in random order


let myYoutubeName = "ronaldo"
let anotherName = myYoutubeName
anothername = "messi"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@upi",
}
let userTwo = userOne
userTwo.email = "hitesh@google.com",
console.log(userOne.email); 
console.log(userTwo.email); 









