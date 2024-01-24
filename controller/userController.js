const User = require("../models/User");

// login user
const loginController = async (req, res) => {
  try {
    const {userId,password} = req.body
    const user = await User.findOne({userId,password,verified:false});
    res.status(200).send("Login Successfully Done");
  } catch (error) {
    console.log(error);
  }
};

// register user

const registerController = async(req, res) =>{
    try {
        const newUser = await User(req.body)
        await newUser.save()
        res.status(201).send("Account created successfully")
    } catch (error) {
        console.log(error);
        res.status(400).send("error",error)
    }
};



module.exports = {loginController,registerController}