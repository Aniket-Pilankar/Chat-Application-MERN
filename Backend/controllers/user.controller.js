const asyncHandler = require('express-async-handler');
const generateToken = require('../configs/generateTokn');
const User = require('../models/user.model');

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Feilds");
    }

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User
        // .create(req.body)
        .create({
            name,
            email,
            password,
            pic
        })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            // isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create User");
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) { // NOT User
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
})




module.exports = { registerUser, authUser }
