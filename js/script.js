$(document).ready(function(){
 // click to grab the rgb color of the clicked panel
 $(".theButton").click(function(){
     var boxColor = $(this).css("background-color");
     $(".superButton").text(boxColor);
 })
 // click the reset button to return to initial text Reset
 $(".superButton").click(function(){
     $(".superButton").text("Reset");
 })
});