const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    const country = req.body.city;
    console.log(country);
    const apiKey = "fabc06e00a9ee64d72fd9950f1a40ab7";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ country + "&appid=" + apiKey;
    
    https.get(url,function(response){
        response.on("data",function(data){
            const WeatherData = JSON.parse(data);
            const desc = WeatherData.weather[0].description;
            const tempp = WeatherData.main.temp;
            res.write("<h1>he temperature in "+ country +" is " + desc +" "+ tempp+ " degress Celcius</h1>");
            res.send();
        })
    })
})


app.listen(3000,function(){
    console.log("you port 3000 has started");
})
//api key
//fabc06e00a9ee64d72fd9950f1a40ab7