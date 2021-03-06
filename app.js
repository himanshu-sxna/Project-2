const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// deliver static files in assets folder
app.use("/public",express.static(path.join(__dirname, "public")));

const routes = require("./controllers/post_controllers");

app.use(routes);

db.sequelize.sync().then(function(){
    app.listen(PORT, ()=> {
        console.log(`App listening on PORT: ${PORT}`); 
    });
});
