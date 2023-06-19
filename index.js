// install node.js globally to then run node index.js in your project's directory terminal

// we declare an array of books

const books = [
    {
        title: "How to be A Man",
        price: 1000,
        author: "Arnold"
    },
    {
        title: "Attracting MOney",
        price: 2400,
        author: "Kirigwi"
    },
    {
        title: "How to say it",
        price: 700,
        author: "JOhn"
    }
]

// create a function to loop through the array
function loopandUpdateArray(array, updateprice){
    const updatedArray = [];
    for(let item of array){
        updatedArray.push(updateprice(item))
    }
    console.log(updatedArray) 
}


// define a function to change the value of price without altering the original one
function updateprice(item){
    let itemCopy = Object.assign({},item)
        itemCopy.price = Math.floor(itemCopy.price/2)
        return itemCopy;
    }

    //using .map()
    // lets display prices
    const prices = books.map(item => item.price)
    console.log(prices)

    // great i want know to return the array with modified prices
    const alterprices = books.map(item=>{
        let itemcopy = Object.assign({},item)
        itemcopy.price = Math.floor(item.price/2)
        return itemcopy
    })

loopandUpdateArray(books, updateprice)
console.log(books)
 