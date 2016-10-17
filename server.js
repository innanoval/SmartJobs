var express = require("express");

var port = process.env.PORT || 2410;

var app = express();

app.use(express.static(__dirname + '/public'));
app.get("*", function (req, res) {
    res.sendFile("public/index.html", { root: __dirname });
});

//
app.listen(port, function () {
    console.log("SmartJobs listening to port", port);
});


// expose app
exports = module.exports = app;
