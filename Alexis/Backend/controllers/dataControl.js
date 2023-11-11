const asyncHandler = require("express-async-handler");
const dataModel = require("../models/dataModel");

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
module.exports = { postData };