// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
   
  arr.forEach(function(name){
    if (name === "Waldo") {
      found(arr.indexOf(name));
    }
  })
  }

function actionWhenFound(index) {
  console.log("Found Waldo at Index " + index) ;
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

