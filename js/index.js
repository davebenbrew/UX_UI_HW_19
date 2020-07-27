console.log("js is loaded correctly");

$(".heroText").on("click", function () { 
    
    console.log("something something");

});

$(".skillButton").on("click", function() {
    
    console.log("you clicked my button");
    $(this).css("background color", "white");
    
});

/*
$(".skillButton").hover( function( event ) {
  $(event.delegateTarget ).css( "background-color", "green");
});


$('.skillButton').hover(function() {
  
  

  if($(this).hasClass('clicked')) {
    $(this).css( "background-color", "white");
  }

  else $(this).css( "background-color", "green");

});

$(".skillButton").hover( function() {
  $(this).css( "background-color", "green");
});

*/

$(document).ready(function(){
  $(".skillButton").hover(function(){
    $(this).css("background-color", "white").show(".skillsList")
      
      
      
      ;
    
  
  
  },
    
    function(){
    $(this).css("background-color", "#007556");
  });
});









