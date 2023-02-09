const express=require('express');

const path=require('path');

const router=express.Router();

const bodyparser=require('body-parser')

router.get('/add-product',(req,res,next)=>{
   // console.log("In another middleware")
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})

router.post('/contactus',(req,res,next)=>{
    console.log(req.body);
    res.redirect("/success");
})

router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
})



module.exports=router;