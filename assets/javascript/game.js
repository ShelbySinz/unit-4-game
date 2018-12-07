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

var isGameover = false;

function reset(){
targetNumber = Math.floor(Math.random()*101+19);
counter = 0;
}


$("#Sock").on("click",function(){


    var sockvalue = ($(this).val());

   sockvalue = parseInt(sockvalue);

   counter += sockvalue;

  console.log(sockvalue);

    

    if (counter === targetNumber){
        wins++;
        alert("you Win!");
        reset();
    }

    else if (counter >= targetNumber){
        losses++;
        alert("You Lose!");
        reset();
    }

});

});
