const express = require("express"); 
const app = express();

app.get("/",(request,response)=>{
    response.send("<h1>hello world</h1>");
    //it sends data to the browser home page(root)
})
app.get('/contact',(req,res)=>{
    res.send("<h2>Contact me at : lencybhalodiya linkeldn</h2>")
})
app.listen(3000,function(){ //it creates our server at address 3000
     console.log("Server started on port 3000");
});