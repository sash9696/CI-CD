const http = require('http');

http.createServer(function(req,res){
	res.write("Hola On the way to become full stack enginner");
	res.end();
}).listen(3001);

console.log('Server started on port 3001');

