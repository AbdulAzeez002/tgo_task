
const axios=require('axios')


const getFood=async(req,res)=>{
  
let foodItem=req.query.food
    try {
        
       
        const food=await axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${foodItem}`,{
            headers: {
              "x-app-id": process.env.x_app_id,
              "x-app-key": process.env.x_app_key,
            },})

        // console.log(food.data,'food')

        res.json(food.data)

    } catch (error) {
        res.json(error.message)
    }


}


module.exports={getFood}