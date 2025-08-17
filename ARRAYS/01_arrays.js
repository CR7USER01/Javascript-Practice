// ARRAYS/01_arrays.js
//console.log("hello world");

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ronaldo", "Messi", "Neymar", "Mbappe", "Benzema","zidane"];
const myArr2 = [1, 2, 3, 4 ]

console.log(myArr);


//array methods

/*myArr.push(6)// adds element at the end
myArr.push(8)// adds element at the end
myArr.push(9)// adds element at the end
myArr.push(7)*/  // adds element at the end

//myArr.unshift(90)

myArr.shift()

//console.log(myArr.includes(9))
//console.log(myArr.includes(4))
//console.log(myArr.indexOf(5))

// adds element at the beginning 

//console.log(myArr);
//const newArr = myArr.join()

//console.log(typeof newArr);

// slice or splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) 

console.log(myn1)
console.log("B" , myArr) 

const myn2 = myArr.splice(1, 4) 

console.log("C ", myArr);

console.log(myn2);






