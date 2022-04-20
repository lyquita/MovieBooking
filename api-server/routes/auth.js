const express = require('express');
const router = express.Router();


router.get('/all', (req, res)=>{
 try{
    return res.send('all!!')
 }
 catch(err){
    return res.send(err)
 }
})


module.exports = router