function findWaldo(arr, thisIsActionWhenFound) {
    arr.forEach(function(person, index) {
      if (person === "Waldo") {  
        var position = index;
        thisIsActionWhenFound(position);   // execute callback
      }
    })
  }
  
  function actionWhenFound(position) {
    console.log("Found him at index " + position + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
