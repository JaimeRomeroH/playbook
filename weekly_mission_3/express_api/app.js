// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

app.get('/v1/explorers', (req, res) => {
    console.log(`Api explorers GET ALL request ${newDate()}`)
    const explorer1 = {id: 1, name: "Jaime1"}
    const explorer2 = {id: 2, name: "Jaime2"}
    const explorer3 = {id: 3, name: "Jaime3"}
    const explorer4 = {id: 4, name: "Jaime4"}
    const explorers =[explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})