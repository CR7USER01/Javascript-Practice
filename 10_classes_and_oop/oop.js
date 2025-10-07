const user = {
    username:"jitu",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
       // console.log("got user details from database")
       console.log(this);
       
    }
}
const user2 = {
    username:"cr7",
    loginCount:88,
    signedIn:true,

}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User (username, logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;
    //return this 
}
const userOne = new User("cr7", 88, true)
const userTwo = new User("jitu", 8, false)
console.log(userOne);
console.log(userTwo);



