const express=require('express')

const path=require('path');



const routeadmin=require('./routes/admin');

const routeshop=require('./routes/shop');

const app=express();

app.use(express.static(path.join(__dirname,'public')))

const bodyparser=require('body-parser')

app.use(routeadmin);
app.use(routeshop);



app.use('/admin',routeadmin);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.use(bodyparser.urlencoded({extended:true}));



app.listen(4000);