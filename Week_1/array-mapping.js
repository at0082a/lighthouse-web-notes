var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];

var result = input.map(function(num) {

var newArray = Math.pow(num.x, 2) + Math.pow(num.y, 2);
return Math.sqrt(newArray);

});


console.log(result);
