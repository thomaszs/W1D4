var words = ["ground", "control", "to", "major", "tom"];

map(words, function (word) {
  return word.length;
});

map(words, function (word) {
  return word.toUpperCase();
});

map(words, function (word) {
  return word.split('').reverse().join('');
});

function map(array, modify) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var result = modify(array[i]);
    newArray.push(result);
  }
  console.log(newArray);
}