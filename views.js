const express = require("express");
const app = express();
const path = require("path");
//  require hbs for paritals
const hbs = require("hbs")

const staticPage = path.join(__dirname, "../template/views")
// console.log(staticPage)
const header = path.join(__dirname, "../template/partials")

// app.use(express.static(staticPage))

// set the view engine
app.set("view engine", "hbs");
// isme apne direactory ka name change kar skte hai
app.set("views", staticPage)
// hbs registring the parital path
hbs.registerPartials(header)

// template engine route

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about", {
        name: req.query.name
    });
    console.log(req.query.name)
})

app.get("/contact", (req, res) => {
    res.render("contact");
});


app.get("/service", (req, res) => {
    res.render("service");
})

app.get("/", (req, res) => {
    res.send("<h1>hello from backend this is express js</h1>")
});


app.get("*", (req, res) => {
    res.render("error")
})

app.listen(8000, "127.0.0.1", (err) => {
    // console.log(err)
    console.log("listineg to port 8000")
})