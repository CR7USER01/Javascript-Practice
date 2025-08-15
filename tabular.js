const accountId = 144553
let accountEmail = "ronaldo@gmail.com"
var accountpassword = "2121212"
accountCity = "Madrid"
let accountState;

accountCity = "Barcelona" 
accountpassword = "2626266"
accountEmail = "ronaldo@gmail.com"

console.table([accountpassword, accountEmail, accountCity, accountId, accountState]);
//prefer not to use var because of function scope issues and block scope is preferred
//accountId = "876" // This line is commented out to avoid changing the constant value
