var prices = [45, 24, 35, 31];

var profit = [];
var number = 0

function maxProfit(price, arr) {
  for(i = 0; i < arr.length; i++) {
    if (number < arr.length)  {
      number++
      profit.push(arr[number - 1] - price);
     } 
  }
  profit.sort((a, b) => a - b)
  return "$ " + profit[profit.length - 1] + " is the greatest profit that could have been made at $" + price + " per share"
}

console.log(maxProfit(27, prices))
