var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
    var a = [];
    for (word of array) {
      a.push(callback(word))
    }
    console.log(a);
}

map(words, function(word) {
  return word.length;
})

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
