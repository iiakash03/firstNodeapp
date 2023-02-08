const express=require('express')

const app=express();

const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}));

app.use('/add-product',(req,res,next)=>{
    console.log("In another middleware")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add product</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log("This always run")
    next();
});



app.listen(4000);