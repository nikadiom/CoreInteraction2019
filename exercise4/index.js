//check if document is ready
$(document).ready(function(){

var name = "Sunayana Bali";
var time = new Date();
var ticker = 0;
var ticker2 = 0;
var colors =["grey", "#00ff00", "pink", "green"];

//Change some html

$('#name').text(name);
$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);

//change some css
$('p').css("font-size",'22px');
$('p').css("color",'grey');

//create a function.
function getTime() {
time = new Date();

//change some html
$('#name').text(name);
$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2)

var rotate ='rotate(' + ticker + 'deg)';
$('#clock').css("transform", rotate);
$('#clock').css("background-color", colors[ticker2]);

ticker += 10;
ticker2 += 1;

if(ticker2 >= 4) {
        ticker2=0;
}
}
// call it
getTime();


setInterval(function(){
//call it every second
getTime();      
},1000)
//end document readt function
})


                  