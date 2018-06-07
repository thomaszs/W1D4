// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name){
    if (name === "Waldo") {
      found();
    }
  })
  }

function actionWhenFound() {
  console.log("Found him") ;
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

