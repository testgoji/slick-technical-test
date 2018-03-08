var express = require('express');
var app = express();
 
app.get('/todo', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
 
 
app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000');
});
