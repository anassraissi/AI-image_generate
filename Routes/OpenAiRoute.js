const express=require('express');

const Route=express.Router();

Route.post('/generateimage',(req,res)=> {

        res.status(200).json({
            success:true,
        })
})

module.exports=Route;