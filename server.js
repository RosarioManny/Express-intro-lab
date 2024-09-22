import express from "express"

const app = express()

app.listen(3000, () => {});


// E1: BE POLITE, GREET THE USER

app.get('/greetings/:username', (req, res) => {
    res.send(`${req.params.username}, Wassup!`)
});

// E2: ROLLING THE DICE
app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const newNumber = Math.floor(Math.random() * number)
    if (isNaN(req.params.number)) {
        res.send("You must specify a number")
    } else {
        res.send(` You rolled a ${newNumber}!`)
       
    }
})

// E3: I WANT THAT ONE!
// - Create a route called "/collectibles/:indexParameter"
// - When looking for an item make the index match it and return it. 
// - Loop throuhgh the collectibels to check the number

app.get('/collectible/:indexParameter', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      const itemIdx = req.params.indexParameter

      if (itemIdx == collectibles.length)
        res.send(`${itemIdx} is ${itemIdx.price}`)
    else {
        res.send("Coming soon. Check back later!")
    }

})

// E4:FILTER SHOES BY QUERY PARAMETERS