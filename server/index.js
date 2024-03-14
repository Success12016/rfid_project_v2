const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const GoldcountModel = require('./models/Goldcount')

const app = express()
app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

mongoose.connect("mongodb+srv://admin:1234@goldcluster.nf1xhez.mongodb.net/")

app.get('/getGoldcount', async (req, res) => {
    try {
        const Goldcount = await GoldcountModel.find();
        res.json(Goldcount);
    } catch (err) {
        res.json(err);
    }
})

app.listen(3001, () => {
    console.log("Server is running")
})