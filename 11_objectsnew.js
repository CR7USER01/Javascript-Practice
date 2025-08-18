// 
//const tinderUser = new Object();// singleton
 const tinderUser = {}  // non singleton
 tinderUser.name = "mrucl";
 tinderUser.id = "1445";
tinderUser.isLoggesIn = false;


// console.log(tinderUser);
const regularUser = {


      email: "some@gmail.com",
      fullname: {
        userfullname:{
            firstName: "ji",
            lastname: "tu"

        }
      }
}
//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 5:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2}
//console.log(obj3)

const users = {

}
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'));





