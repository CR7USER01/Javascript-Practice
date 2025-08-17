const name = "ronaldo x messi"
const repoCount = 07

//console.log("name " + repoCount + " value")
//console.log(`hii my name is ${name}  and my repo count is ${repoCount}`)


const gameName = new String ('gta-sanandreas')

//console.log(gameName[0])
//console.log(gameName.__proto__)
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(1))
//console.log(gameName.indexOf('g'));

const newString = gameName.substring(-1, 4)
//console.log(newString);
const anotherString =  gameName.slice(7, 9);
//console.log(anotherString);

const newStringOne = "   elbicho    "
//console.log(newStringOne)
//console.log(newStringOne.trim()); 
// removes whitespace from both ends of a string
const url = "https://www.youtube.com/@ron%20aldo"
console.log(url.replace("%20", "__")); // replaces first occurrence of %20 with __

console.log(url.includes("youtube")) //checks if the string contains "youtube"
console.log(url.includes("buggati"))

console.log(gameName.split('_'))









