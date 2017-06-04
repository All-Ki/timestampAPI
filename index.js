var express=require("express");
var chrono = require('chrono-node')

var app = express();




app.get('/*', function (req, res) {
  
  var x = JSON.stringify(chrono.parseDate(urldecode(req.originalUrl.replace("/",""))));
  console.log(x);
  x=x.replace(/GMT.*/g, "").replace(/[a-zA-Z]/g," ");
  res.send("<body>" +"Time : " + x + " UNIX : " + Date.parse(x) + "</body>");
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port' + process.env.PORT);
});


function urldecode(str) {
   return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}

