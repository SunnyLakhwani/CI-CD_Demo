const http = require ('http');

const server = http.creatServer((req, res)=>){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end ('Hello from C!/CD Pipeline!' \in);

});
server.listen(3000,()=>{
    console.log('server running on the port 3000');

});
