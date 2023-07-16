const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html");
} );

app.post("/index.html", function(req,res){
    var num1 = Number( req.body.num1);
    var num2 = Number( req.body.num2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
    console.log(req.body);
} );

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
} );

app.post("/bmiCalculator", function(req,res){
    var Weight = parseFloat( req.body.Weight);
    var Height = parseFloat( req.body.Height);
    var result = Weight/ (Height*Height);

    res.send("Your BMI is " + result);
    console.log(req.body);
} );


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})