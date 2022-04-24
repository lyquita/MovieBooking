const express = require("express");
const Banner = require("../models/banner");

const router = express.Router()

router.get('/banner', async(req, res)=>{
    try{
        const banners = await Banner.findAll()
        return res.status(200).json(banners)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
})





module.exports = router;