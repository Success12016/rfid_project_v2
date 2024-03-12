const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const GoldcountModel = require('./models/Goldcount')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/GoldRfid")

app.get('/getGoldcount', (req, res) => {
    GoldcountModel.find()
    .then(goldcount => res.json(goldcount))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})