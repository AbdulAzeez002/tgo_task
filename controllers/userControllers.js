const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')


// Generate JWT

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
 }



const registerUser = async (req, res) => {
    const { email, name, password } = req.body
    // Hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    if (!name || !email || !password) {
        res.status(400).json("please add all fields")

    }


    else {
        try {
            const user= await User.create({
                name,
                email,
                password:hashedPassword
            })

            res.status(200).json({
                email:user.email,
                _id:user._id,
                token:generateToken(user._id)
            })
            

        } catch (error) {
              res.json(error.message)
        }
    }


}


const loginUser=async(req,res)=>{
    const {email,password}=req.body


    try {
        const user=await User.findOne({email})
        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).json({
                id:user._id,
                token:generateToken(user._id)


            })
        }
        else{
            res.status(400).json("invalid credentials")
        }
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = { registerUser,loginUser }
