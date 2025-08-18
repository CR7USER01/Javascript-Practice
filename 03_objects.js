// singleton 
//Object.create
//objects litelars 

  const mySym =Symbol("key1");


  const JsUser =  {
    name: "ronaldo",
    "full name": "Cristiano Ronaldo",
    
   [mySym]: "myKey1",
    mySym: "myKey1",
    age:40,
    location:"portugal",
    email:"cr7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"],
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser.name)
//console.log(JsUser["full name"])// BEST OPTION 
//console.log(JsUser.full name) // will throw an error //

//console.log(typeof JsUser[mySym])
//console.log(JsUser[mySym]) // will return undefined because mySym is not a property of JsUser   //-- op = symbol key
  //console.log(JsUser.mySym)

JsUser.email = "elbicho@gmail.com"
//Object.freeze(JsUser) // will make JsUser immutable or unchangable
JsUser.email = "hattric@gmail.com"
//console.log(JsUser.email)

// functions as objects

JsUser.gretting = function() {
    console.log("hello JS user")
     

}
JsUser.gretting = function() {
    console.log(`hello JS user, ${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
/////    full doubt





