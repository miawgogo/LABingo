function bingoClickHandler(el){
    if(el.classList.includes('got')){
        el.classList.remove('got');
    }else{
        el.classList.add('got');
    }
}

function populateBingo(list) {
    var options = list.split('\n');
    console.log(list)
    var squares = document.getElementsByClassName("bingoSquare");
    for (var i = 0; i < squares.length; i++) {
        var randomIndex = Math.floor(Math.random() * options.length);
        var phraseStr = options[randomIndex];
        squares[i].innerHTML = phraseStr;
        squares[i].onclick = bingoClickHandler;
        options.splice(randomIndex, 1);
    }
}

let myRequest = new Request('options.txt');

fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
        populateBingo(text);
    });
  });