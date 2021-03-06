var express = require("express")

var app = express();
var PORT = process.env.PORT || 8080;
var apiRoutes = require("./routes/api-routes.js")
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require("./routes/api-routes.js")(app)
app.use("/api/servicemembers", apiRoutes)


db.sequelize.sync( { force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT); 
    });
});