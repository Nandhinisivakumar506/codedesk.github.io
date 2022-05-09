var http=require('http');
var dt=require('/Users/Nandhini/Desktop/firstmodule');
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'})
res.end("the time and date:"+domai);
}).listen(8081);