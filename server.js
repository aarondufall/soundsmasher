//4 line web server
var connect = require('connect');
connect.createServer(
  connect.static(__dirname+'/public')
).listen(8080);