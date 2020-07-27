console.log("js is loaded correctly");

$(".skillButton").on("click", function() { 
    console.log("you clicked my button");
});


$(document).ready(function(){
  $(".skillButton").hover(function(){
    $(this).css("background-color", "white").show(".skillsList");},
    
    function(){
    $(this).css("background-color", "#007556");
  });
});









