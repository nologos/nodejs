// function average(scorearray) {
//     var total= 0
//     var result= 0
//     console.log(scorearray)
//     for(i in scorearray)
//         total= total + scorearray[i];
//         console.log("NUMBER ADDED IS"+scorearray[i])
//         console.log("TOTAL INSIDE FOR LOOP IS "+total)
//     result = total/scorearray.length
//     console.log("LENGTH IS "+scorearray.length)
    
    
//     return Math.floor(result)
// }

function average(scorearray){

    var total = 0;
    scorearray.forEach(function(score){
        total += score;
    })
    var avg = total/scorearray.length
    ret = Math.round(avg)

    return ret

}

var scrores1 = [90, 98, 89, 100, 100, 86, 94];
console.log("result is " + average(scrores1));
var scrores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("result is " + average(scrores2));


