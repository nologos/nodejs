nodeJS stuff
===


## create a bacis working app template

### how to import
```
var express = require("express")  
var app = express()
```

### main lisener, has to be at the end of the routes

```
app.listen(3000, process.env.IP, function(req, res){
    console.log("hello world")
})
```

### routes, replace * with the direction of the link, main JS body goes in this call
```
app.get("*",function(req,res){
    res.send("hello")
})
```

## code examples with code
### URL variables for loop

1. to get the data from the user, use req(first argument of the funcion). req.params returns everything you know about the user browsing.  
2. you can define variables in the url by using colon(:) before the url word  
3. variables defined in the url can be accessed by the deffined names req.params.word

```
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
```

### foreach loop

1. first goes array then function then variable to be iterated.
```
app.get("/ass2",function(req, res){
    var result = ""
    var animals = ["pig", "cow", "dog", "cat", "fox"];
    animals.forEach(dong => {
        result += (dong + " ")
    });
    res.send(result)
});
```