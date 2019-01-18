var express = require("express")
var app = express()

app.get("/", function(req, res){
    res.send("hello wellcome to my assignment")
    console.log("someone accesses root")
});


app.get("/home/:name",function(req,res){
    var result 
    var name = req.params.name
    console.log(name)
    res.send("hello "+name)
});

app.get("/dontfuckwithme/:number/:word", function(req,res){
    var number = req.params.number
    var word = req.params.word
    var result = ""
    for(var i=0; i<=number; i++){
        result += word
    }
    res.send(result)
});


app.get("/var/:varialbes",function(req, res){
    var animals = ["pig", "cow", "dog", "cat", "fox"];
    var an2 = req.params.varialbes
    var result = ""
    animals.forEach(dong => {
        result += (dong + " " + an2 + " ")
    });
    res.send(result)
    console.log("someone accesses var")
});

app.get("/var2",function(req,res){
    var an1 = ["pig", "cow", "dog", "cat", "fox"];
    //var an2 = res.params.animals
    
    res.send("hello2")

    console.log("someone accesses root2")
});




app.get("*",function(req,res){
    res.send("missed URL")

    console.log("someone accesses root")
})


app.listen(3000, process.env.IP, function(req, res){
    console.log("assignment 2 server started")
})

