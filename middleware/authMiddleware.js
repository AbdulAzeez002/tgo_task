const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const protect = async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
     
      try {
        if (token) {
          
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
          const user = await User.findById(decoded?.id).select("-password");
          
          //attach the user to the request object
          req.user = user;
          next();
        }
        else{
          res.json("no token is provided");
        }
      } catch (error) {
        res.json("Not authorized token expired, login again")
        
      }
    }
     else {
      res.json("There is no token attached to the header");
    }
  }


module.exports={protect}