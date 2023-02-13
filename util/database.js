const mysql=require('mysql');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'projectdb',
    password:'Akash@8958'
})

module.exports=pool.promise();
