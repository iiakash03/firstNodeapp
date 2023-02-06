const http=require('http');
const fs=require('fs');
const { Stream } = require('stream');
const server=http.createServer((req,res)=>{
    let url=req.url;
    let method=req.method;
    if(url==='/'){

        fs.readFile('message.txt',{ encoding:"utf-8"},(err,data)=>{

        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>first nodejs</title></head>');
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input name="message"></input><input type="submit"></input>></form></body>')
        res.write('</html>');
        return res.end();
    })
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })

        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();

            });
            
            
        })
        
        
    }
})

server.listen(4000);
