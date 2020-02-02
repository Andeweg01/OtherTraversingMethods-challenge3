$(document).ready(function(){
 // put your code here
 $("#panel").click(function(){
     var boxColor = $(this).css("background-color");
     $(".superButton").text(boxColor);
 })
 $(".superButton").click(function(){
     $(".superButton").text("Reset");
 })
});