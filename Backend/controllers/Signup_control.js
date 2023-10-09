const asyncHandler = require('express-async-handler');
const User = require('../models/Signup_model');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, address, UserId, Age, Gender } = req.body;

    // Validation
    if (!name || !email || !password || !address || !UserId || !Age || !Gender) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }

    // Check if user with the given UserId already exists
    const existingUser = await User.findOne({ UserId });
    if (existingUser) {
        res.status(400);
        throw new Error("User with this UserId already exists");
    }

    // Create a new user
    const newUser = await User.create({
        name,
        email,
        password,
        address,
        UserId,
        Age,
        Gender,
    });

    // Respond with the created user details
    if(user){
    res.status(201).json({
        UserId: newUser.UserId,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        address: newUser.address,
        Age: newUser.Age,
        Gender: newUser.Gender,
    });
}
else{
    res.status(400);
    throw new Error("Invalid User Data");
}

    const userData = req.body; 

    console.log(userData);//

    res.status(200).json({ message: 'Signup successful' });



});

module.exports = { registerUser } ;