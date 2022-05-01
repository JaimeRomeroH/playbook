const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a LaunchX')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
