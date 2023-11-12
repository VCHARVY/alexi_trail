const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    componentName: String,
    amountInMg: String,
})

const simulateData = mongoose.Schema({
    attr: [dataSchema]
})
const patientSchema = mongoose.Schema({
    Height:String,
    Weight: String,
    Gender: String,
    Age: String,
    occupation:String
})

const dataModel = mongoose.model("dataModel", simulateData)
const patientModel=mongoose.model("patientModel",patientSchema)
module.exports = {dataModel,patientModel};