const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodeall',
    password:'Akash@8958'
});

module.exports=pool.promise();
