const express = require ("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const templet_path = path.join(__dirname,"../src/templets/views");
const partial_path = path.join(__dirname,"../src/templets/partials");

app.set("view engine",'hbs');
app.set("views",templet_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render("index ");
});
app.get("/about",(req,res)=>{
    res.render("about");
});


app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'opps page not found'
    })
});


app.listen(port,()=>{
    console.log("welcome");
}
);