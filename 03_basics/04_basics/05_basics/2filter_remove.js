const myNums = [1,2,3]
//
//const myTotal = myNums.reduce(function (acc, curval) {
//    console.log(`acc: ${acc} and currval:${curval}`);
//    return acc + curval
//} , 0)
//

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)



console.log(myTotal);


const shoppingCart =[
{
    itemName:"js course",
    price:3000
},
{
    itemName:"py course",
    price:300
},
{
    itemName:"data science course",
    price:30000
},
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);


