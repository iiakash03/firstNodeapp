const express=require('express')

const routeadmin=require('./routes/admin');

const routeshop=require('./routes/shop');

const app=express();

const bodyparser=require('body-parser')

app.use(routeadmin);
app.use(routeshop);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.use(bodyparser.urlencoded({extended:true}));

app.listen(4000);