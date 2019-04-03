function removeWhiteSpace(input) {
    var removeSpace = input.split(' ').join('');
    return removeSpace;
}

console.log(removeWhiteSpace("lighthouse in the house"));

function countLetters(string) {

var newWord = removeWhiteSpace(string)
var counter = {};

for (var i = 0; i < newWord.length; i ++) {
    var store = newWord[i]; 
    var counterLetters = counter[store];
    if (counterLetters === undefined) {
        counter[store] = 1;
    } else if (counterLetters >= 1) {
        counter[store] += 1;
    }
}

return counter;

}
