
//var c = 300
let a = 300  // global scope

if (true){
    let a = 10
    const b = 20 
     //console.log("INNER:",a)//ineer blog scope
}

// nested scope 

function one(){
    const userName = "ronaldo"

    function two(){
        const website = "google.com"
        //console.log(userName);
    
    }

    //console.log(website);  // website is not defined

    two()
}
one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube.com"
        //console.log(username + website);
        

    }
    //console.log(website);  // website is not defined
}
//console.log(userName);  // userName is not defined



//console.log(a);
//console.log(b);
//console.log(c)

//++++++++++++++++++ interesting example ++++++++++++++++++++++++++++   


console.log(addone(5))
function addone(num){
    return num + 1
}
//addone(5)

console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
//addTwo(5)