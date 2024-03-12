const mongoose = require('mongoose')

const GoldcountSchema = new mongoose.Schema({
    gold_id: String,
    goldtype: String,
    size: String,
    weight: String
})

const GoldcountModel = mongoose.model("goldcount",GoldcountSchema)
module.exports = GoldcountModel