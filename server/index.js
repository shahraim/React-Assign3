var express = require('express')
var cors = require('cors')
var app = express()
const port = 6246

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello")
})



app.post('/', (req, res) => {
    res.json(req.body)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})