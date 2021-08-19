var http=require('http');

var server = http.createServer(function (req,res){

    if(req.url=="/"){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>badhon</h1>');
    }
    else if(req.url=="/about"){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>bad</h1>');
    }

    else if(req.url=="/project"){

        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>chakarboti</h1>');
    };
});

server.listen(5050);
console.log("server run success");