 const user = {
        username:"ronaldo",
        price:999,

        welcomeMessage: function(){
            console.log(`welcome ${this.username} your price is ${this.price}`)
            console.log(this)
        }
 }
//user.welcomeMessage()
//user.username = "khabib"
//user.welcomeMessage()

//console.log(this)

//function chai(){
    let username = "ronaldo"
    //console.log(this);
//}

//chai()
  
//const addTwo = (num1, num2) =>  num1 + num2
 //const addTwo = (num1, num2) => (num1 + num2)
  const addTwo = (num1, num2) => ({username: "ronaldo"})

console.log(addTwo(5,6))
