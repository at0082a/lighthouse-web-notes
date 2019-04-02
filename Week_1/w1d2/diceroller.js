
function diceRoller () {
    var args = process.argv[2];
    var output = [];
    for (i = 0; i < args; i++) {
        var randNum = Math.floor((Math.random() * 6) + 1)
        output.push(randNum);
    }  
    return "Rolled " + args + " dice: " + output.join(', ');
}

console.log(diceRoller());