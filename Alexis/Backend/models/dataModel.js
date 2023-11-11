const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    componentName: String,
    amountInMg: String,
})

const simulateData = mongoose.Schema({
    attr: [dataSchema]
})

const dataModel = mongoose.model("dataModel", simulateData)
module.exports = dataModel;