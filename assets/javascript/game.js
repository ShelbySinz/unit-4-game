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

$("#freedobby").hide();

function reset(){
targetNumber = Math.floor(Math.random()*101+19);

counter = 0;

$("#numberat, #number-to-guess").empty();

}

function imFree(){
    $("#freedobby").show();
}
function hidedobby(){
    $("#freedobby").hide("60000");
}



    function roundDone (){
        if (counter === targetNumber){
            wins++;
            $("#wins").text(wins);
            imFree(); 
            
            reset();
           
            $("#number-to-guess").text(targetNumber);
            $("#numberat").text(counter);
          setTimeout (hidedobby, 3000);
            
        }
    
        else if (counter >= targetNumber){
            losses++;
            $("#losses").text(losses);
            alert("You Lose!");
            reset();
            $("#number-to-guess").text(targetNumber);
            $("#numberat").text(counter);
        }
    }

$(".one").on("click",function(){

    alert("get those socks!");


    var sockvalue = $(this).val();

   sockvalue = parseInt(sockvalue);

counter += sockvalue;

   $("#numberat").text(counter);


  console.log(sockvalue);



    


 

roundDone();

});

});
