const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');
console.log("it fails in control1")
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, address, UserId, Age, Gender,IsMedical_professional } = req.body;
    if (!name || !email || !password || !address || !UserId || !Age || !Gender ||!IsMedical_professional) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }
    try {
        console.log(name);
        const existingUser = await User.findOne({ UserId });
        if (existingUser) {
            res.status(400);
            throw new Error("User with this UserId already exists");
        }
        const NU = {
            name: name,
            email: email,
            password: password,
            address: address,
            UserId: UserId,
            Age: Age,
            Gender: Gender,
            IsMedical_professional:IsMedical_professional

        };
        const newUser = await User.create(NU);
        res.status(200).json({
            _id: newUser._id,
            UserId: newUser.UserId,
            email: newUser.email,
            password: newUser.password,
            name: newUser.name,
            address: newUser.address,
            Age: newUser.Age,
            Gender: newUser.Gender,
            IsMedical_professional:newUser.IsMedical_professional
        });
        res.status(200).json(name);
    }
    catch (error) {
        res.status(500).json({
            
            message: "trash"
            
        });
        alert("it fails in control")
    }
});



const authUser = asyncHandler(async (req, res) => {
    // alert("it is in userControl")
    const { UserId, password } = req.body;
    const user = await User.findOne({ UserId });
    if (user && (await user.matchPassword(password))) {
       
        res.status(200).json({
           

            UserId: user.UserId,
            IsMedical_professional:user.IsMedical_professional

            
        });
    } else {
        res.status(401).json({
            message: "Invalid UserId or Password",
        });
    }
    
})

module.exports = { registerUser, authUser };