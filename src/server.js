const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

//ignore request when the url contains 'favicon.ico' 

app.get("/", function (req, res) {

  if(request.url!='/favicon.ico'){ 
  }
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080); 