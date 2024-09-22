// import express from "express"

// const app = express()

// app.listen(3000, () => {});


// // E1: BE POLITE, GREET THE USER

// app.get('/greetings/:username', (req, res) => {
//     res.send(`${req.params.username}, Wassup!`)
// });

// // E2: ROLLING THE DICE
// app.get('/roll/:number', (req, res) => {
//     const number = parseInt(req.params.number);
//     const newNumber = Math.floor(Math.random() * number)
//     if (isNaN(req.params.number)) {
//         res.send("You must specify a number")
//     } else {
//         res.send(` You rolled a ${newNumber}!`)
       
//     }
// })

// // E3: I WANT THAT ONE!
// // - Create a route called "/collectibles/:indexParameter"
// // - When looking for an item make the index match it and return it. 
// // - Item number cannot exceed amount within array. If so return N/A

// app.get('/collectible/:indexParameter', (req, res) => {
//     const collectibles = [
//         { name: 'shiny ball', price: 5.95 },
//         { name: 'autographed picture of a dog', price: 10 },
//         { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//       ];
      
//       const itemIdx = req.params.indexParameter
     
//       if (itemIdx < collectibles.length)
//         res.send(`${collectibles[itemIdx].name} is  $${collectibles[itemIdx].price}`)
//     else {
//         res.send("Coming soon. Check back later!")
//     }

// })

// // E4:FILTER SHOES BY QUERY PARAMETERS
// // Give a specific set of shoes within the array (req < shoes.length)
// // Should give its name, price and type. (req.query.name ....)
// // shoes.filter

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


// console.log(minPrice)
app.get('/shoe', (req, res) => {
    const minPrice = shoes.filter(shoe => shoe.price <= req.query.min)
    if (req.query.min) {
        res.send(minPrice)
    }
    if (req.query === "max-price") {
        res.send("Yellow, Bee")
    }
    if (req.query === "type") {
        res.send("Goodbye ")
    }
})

//     const minPrice = shoes
//     .filter((shoe) => shoe.price < req.query)
//     const maxPrice 
//     const shoeType
//     if (req.params == shoes)
//     res.send(`We have shoes below ${req.query.pice}`)
// })