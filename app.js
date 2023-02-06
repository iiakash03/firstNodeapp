const http=require('http');
const handle=require('./script');

const server=http.createServer(handle);
   
server.listen(4000);
