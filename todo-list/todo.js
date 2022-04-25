const express = require("express");
const bodyParser = require("body-parser"); // helps to take value from html attributes
const res = require("express/lib/response");
const app = express();
app.set('view engine', 'ejs'); //initialize the ejs file
 app.use(bodyParser.urlencoded({extended: true})); //to make use of body parser
app.use(express.static("public")); // to load static file like css and images in public folder

 let items = []; //empty array
 let workItems = [];
app.get("/",function(req,res){
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day =today.toLocaleDateString("en-US",options)  //gets date in dd-mm-yy format
    res.render("list",{listTitle : day,newListItem: items}); // render page ejs by provided value
});

app.post("/",function(req,res){
   let item = req.body.newItem;
   if(req.body.button === "Work-list"){
       workItems.push(item);
       res.redirect("/work")
   }else{
   items.push(item); // push name or value of user input to array
   res.redirect("/");

   }
})

app.get("/work",function(req,res){
     res.render("list", {listTitle: "Work-List",newListItem: workItems}); 
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
app.listen(3000,function(){
    console.log("Your server has started at port 3000");
});

