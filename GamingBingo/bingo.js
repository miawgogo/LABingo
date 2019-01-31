function populateBingo(list) {
    var options = list.split('\r\n');
    console.log(list)
    var squares = document.getElementsByClassName("bingoSquare");
    for (var i = 0; i < squares.length; i++) {
        var randomIndex = Math.floor(Math.random() * options.length);
        var phraseStr = options[randomIndex];
        squares[i] = phraseStr;
        options.splice(randomIndex, 1);
    }
}

let myRequest = new Request('options.txt');

fetch(myRequest)
.then(function(response) {
    if (!response.ok) {
      throw new Error('HTTP error, status = ' + response.status);
    }
    return response.blob();
  })
  .then(function(response) {
    populateBingo(response.text);
  });
