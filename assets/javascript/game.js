$(document).ready(function(){

var targetNumber = Math.floor(Math.random()*101+19);

$("#number-to-guess").text(targetNumber);

var counter = 0;

$("#numberat").text(counter);

console.log(counter);

var wins = 0;
var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);



function reset(){
targetNumber = Math.floor(Math.random()*101+19);

counter = 0;

$("#numberat, #number-to-guess").empty();

}


$(".one").on("click",function(){

    alert("get those socks!");


    var sockvalue = $(this).val();

   sockvalue = parseInt(sockvalue);

counter += sockvalue;

   $("#numberat").text(counter);


  console.log(sockvalue);

    

    if (counter === targetNumber){
        wins++;
        $("#wins").text(wins);
        alert("you Win!");
        reset();
        $("#number-to-guess").text(targetNumber);
        $("#numberat").text(counter);
    }

    else if (counter >= targetNumber){
        losses++;
        $("#losses").text(losses);
        alert("You Lose!");
        reset();
        $("#number-to-guess").text(targetNumber);
        $("#numberat").text(counter);
    }

});

});
