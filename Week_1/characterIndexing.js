function countLetters(string) {
    
    var positioner = {};
    
    for (var i = 0; i < string.length; i ++) {
        var store = string[i];
        if (string[i] !== ' ') {
        var counterLetters = positioner[store];
        if (counterLetters === undefined) {
            positioner[store] = [i];
        } else {
             counterLetters.push(i);
        }
    }
  
}
    return positioner;
}
    
   
