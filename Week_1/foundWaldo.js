function findWaldo(arr, thisisactionwhenfound) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
          var position = i
        thisisactionwhenfound(position);   // execute callback
      }
    }
  }
  
  function actionWhenFound(position) {
    console.log("Found him at index " + position + "!");
  }
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//   var names = ["Alice", "Bob", "Waldo", "Winston"]
  
//   for (var i = 0; i < names.length; i++) {
//     if (names[i] === "Waldo") {
//         var position = i; 
//          console.log(i)  // execute callback
//     }
//   }
