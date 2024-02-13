const User = require("../models/User");
const bcrypt = require('bcrypt');

// login user
const loginController = async (req, res) => {
  try {
    const {email,password} = req.body
    const user = await User.findOne({email,password,verified:false});
    res.status(200).send("Login Successfully Done");
  } catch (error) {
    console.log(error);
  }
};

// register user

const registerController = async(req, res) =>{
    try {
        const {name,email,password} = req.body;

        const existinguser = await User.findOne({email});
        if(existinguser){
          return res.status(400).send("User with same email already exist")
        }
        const hashedpassword =  await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedpassword,
        })
        await newUser.save()
        res.status(201).send("Account created successfully")
    } catch (error) {
        console.log(error);
        res.status(400).send("error",error)
    }
};



module.exports = {loginController,registerController}