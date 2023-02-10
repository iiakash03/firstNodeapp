const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController=require('./controller/404.js');

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);
