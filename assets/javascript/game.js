$( document ).ready(function(){

var targetNumber = 58;

$("#number-to-guess").text(targetNumber);

var counter = 0;

$("#numberat").text(counter);

var numberOptions = [15, 2, 6, 25];

for( var i= 0; i < numberOptions.length; i++){

var sockimage = $("<img>");

sockimage.addClass("sockIMG");

sockimage.attr("src","assets/images/sockimage.jpg");
   

sockimage.attr("data-sockvalue", numberOptions[i]);

$("#sockimg").append(sockimage);


}

$(".SockIMG").on("click", function(){

    var sockvalue = ($(this).attr("data-sockvalue"));
    sockvalue = parseInt(sockvalue);

    counter += sockvalue;

    console.log(sockvalue);

    if (counter === targetNumber){
        alert("you Win!");
    }

    else if (counter >= targetNumber){
        alert("You Lose!")
    }

});
});