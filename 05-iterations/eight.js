const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "python course",
        itemPrice: "999"
    },
    {
        itemName: "Machine learning course",
        itemPrice: "2999"
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.itemPrice, 0)
console.log(priceToPay);
