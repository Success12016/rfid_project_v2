const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:1234@goldcluster.nf1xhez.mongodb.net/")

const GoldcountSchema = new mongoose.Schema({
    gold_id: String,
    goldtype: String,
    size: String,
    weight: String
})

const GoldcountModel = mongoose.model("Goldcount",GoldcountSchema)
module.exports = GoldcountModel