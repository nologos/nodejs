var express = require("express")

var app = express()

//hi there
app.get("/", function(req, res){
    res.send("hi there");
    console.log("someone requested root")


});
//bye there
app.get("/bye", function(req, res){
    res.send("bye there dude");
    console.log("someone requested bye")


});

//bsdtatr
app.get("*", function(req, res){
    res.send("you missed try again");
    console.log("someone requested bye")


    
});
//fox say hahsdhashuyuu 
app.get("/foxsay", function(req, res){
    res.send("fox say ahhhahahauuu uauu");
    console.log("someone requested foxes")
})
app.listen(3000, process.env.IP, function(){
    console.log("server has started!!!")


}); 
