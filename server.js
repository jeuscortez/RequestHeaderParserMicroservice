// init project
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var userAgent = require('express-useragent');
var app = express();

//importing lib
app.use(bodyParser.json());
app.use(cors());
app.use(userAgent.express());

app.get('/',function(req,res){
  //get ip address
  var ipAddress = req.header('x-forwarded-for').split(",")[0];
  //get current language of browser
  var language = req.acceptsLanguage();
  //get browser and user operating system
  var software = "Browser: " + req.useragent.browser + ", OS: "+req.useragent.os;
  
  res.json({"ipaddress":ipAddress, "language":language[0], "software":software});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
