
var express = require("express");
var app = express();


var PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));


require("./api")(app);
// require("./html")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});