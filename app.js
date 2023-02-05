const http=require('http');
const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>first nodejs</title></head>');
        res.write('<body>Welcome home</body>')
        res.write('</html>');
        res.end();
    }else if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>first nodejs</title></head>');
        res.write('<body>Welcome to about us page</body>')
        res.write('</html>');
        res.end();
    }else if(url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>first nodejs</title></head>');
        res.write('<body>Welcome to my node js project</body>')
        res.write('</html>');
        res.end();
    }
})

server.listen(4000);
