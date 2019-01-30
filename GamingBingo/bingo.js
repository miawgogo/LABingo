function populateBingo(){
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open('GET', "options.txt", false);
    xmlhttp.send();
    var options= xmlhttp.responseText.split('\r\n')
}