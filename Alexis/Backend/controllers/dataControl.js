const asyncHandler = require("express-async-handler");
const {dataModel,patientModel} = require("../models/dataModel");

const postData = asyncHandler(async (req, res) => {
    const { inputList } = req.body;
    try {
        if (!inputList || inputList.length === 0) {
            return res.status(400).json({ error: 'InputList is required' });
        }
        const transformedData = {
            attr: inputList.map(item => ({
                componentName: item.componentName,
                amountInMg: item.amountInMg,
            })),
        };
        const simulateData = await dataModel.create(transformedData);
        return res.status(201).json(simulateData);
    } catch (error) {
        res.status(500).json({
            message: "missed data push",
        });
    }
});
const postPatient=asyncHandler(async(req,res)=>{
    const { Age,
        Gender,
        Height,
        Weight,
        occupation } = req.body;
    if ( !Height || !Weight || !Age || !Gender ||!occupation) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }
    try {
        console.log()
       console.log(Age)
        const NP = {
            
           
            Height:Height,
            Weight:Weight,
            Gender: Gender,
            Age: Age,
            occupation:occupation

        };
        const newPatient = await patientModel.create(NP);
        res.status(200).json({
            _id: newPatient._id,
            Height: newPatient.Height,
            
            Weight: newPatient.Weight,
           
            Gender: newPatient.Gender,
            Age: newPatient.Age,
            occupation:newPatient.occupation
        });
        res.status(200).json(Age);
    }
    catch (error) {
        res.status(500).json({
            
            message: "trash"
            
        });
       
    }

});
module.exports = { postData,postPatient };