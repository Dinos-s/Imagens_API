const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

// BD connect
const conn = require('./db/conn')
conn()

// Rotas
const routes = require("./routes/router")
app.use('/img',routes)

app.listen(3000, () => {
    console.log('Server Online!');
})