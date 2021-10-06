var fs=require('fs');

var http=require('http');

var swever=http.createServer(function(req,res){

    if(req.url="/"){
        fs.readFile('index.html',function(error,data){

             res.writeHead(200,{'content-type':'text/html'});
             res.write(data);
             res.end();
        });
    };
});

Server.listen(4040);

console.log("badhon");