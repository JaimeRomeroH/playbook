const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a LaunchX')
})

app.get('/explorersInNode', (req, res) =>{
    const explorer = {name: "Jaime", msg: "Hello"}
    res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) =>{
    
    res.send(req.params)
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
