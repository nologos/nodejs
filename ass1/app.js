var express = require("express")
var app = express()

console.log(process.env.IP)

// create 3 different routes:
// 1. visiitn /. should print hello there wellcome....
app.get("/", function(req, res){
    res.send("hello wellcome to my assignment")
    console.log("someone accesses root")
});

// 2. visiting speak/pig speak/cow dog + 2 more sohuld print the dog says....
//

// create an array that contains the 3 animals
// var array = ["pig", "cow", "dog", "cat", "fox"];


app.get("/speakwrong/:animal", function(req, res){
    console.log(req.params)
    animal = req.params.animal

    var voice = " "
    if (animal == "dog"){voice = "woof"}
    if (animal == "pig"){voice = "reeeee"}
    if (animal == "cow"){voice = "mooo"}
    if (animal == "cat"){voice = "meeeeoow"}
    if (animal == "fox"){voice = "awwososoohgooho"}


    console.log(voice)

    res.send("the "+ animal + " say " + voice )

});


app.get("/speak/:animal", function(req, res){
    console.log(req.params)
    animal = req.params.animal.toLowerCase()
    var sounds = {
        dog : "woof",
        pig : "oink",
        cow : "mooo",
        cat : "meeeoowww",
        fox : "yahhoosoosos",
    }
        var sound = sounds[animal]
        console.log(sound)
        if(sound == undefined){sound = "hello"}
    res.send("the "+ animal + ' says "' + sound + '"')

});


// visiting /repeat hello 3 should print hello 3 times

app.get("/repeat/:word/:repeattimes", function(req, res){
    console.log(req.params)
    var word = req.params.word
    var times = Number(req.params.repeattimes)
    var result = ""
    for(var i=0; i<=times; i++){
        result += word + " "
    }
    res.send(result+ " ")
});

app.get("/bye", function(req, res){
    res.send("bye there dude");
    console.log("someone requested bye")


});



app.get("*", function(req, res){
    res.send("sorry page not found, please come again")
});

app.listen(3000, process.env.IP);

app.listen(3001, process.env.IP);
