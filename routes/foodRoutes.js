const express=require('express')
const foodRouter=express.Router()
const { getFood } = require('../controllers/foodController')
const { protect } = require('../middleware/authMiddleware')
foodRouter.get('/',protect,getFood)


module.exports=foodRouter


