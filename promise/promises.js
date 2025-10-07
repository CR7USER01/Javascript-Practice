

const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //Db call , cryptography , network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)


})
promiseOne.then(function(){
console.log("promise consumed")

})

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async  2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){  
        resolve({userame:"cr7", email:"cr7@gmail.com"})
},1000)
})

promiseThree.then(function(user){
    
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"cr7", password:12345})
        } else {
            reject('error: something went wrong')
        }

    },1000)
})

 promiseFour.then((user)=> {

    console.log(user)
    return user.username
    
}).then((username) =>  {
    console.log(username)

}).catch(function(err){
    console.log(err)
}).finally(()=> console.log("promise four is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
   
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript", password:12345})
        } else {
            reject('error: something went wrong')
        }

    },1000)
});
  
async function consumePromiseFive(){
       try {
        const responce = await promiseFive
       console.log(responce);
       } catch(error){
        console.log(error);
       }
}


consumePromiseFive()


// async function getAllUsers(){
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }  catch(error){
//     console.log("E:", error);
//   }
// }


//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users') 

.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => console.log(Error))
