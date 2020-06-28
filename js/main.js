'use strict'

$( document ).ready(function() {
    $(".menu-item").hover(function(){
        $(this).css("color", "#488eff");
        }, function(){
        $(this).css("color", "#232323");
    });
    
    $(".client").hover(function(){
        $(this).css("transform", "scale(0.90,0.90)");
        $(this).css("box-shadow", "15px 15px 20px rgba(72, 142, 255, 0.1)");
        }, function(){
        $(this).css("transform", "scale(1,1)");
        $(this).css("box-shadow", "0px 0px 0px rgba(0, 0,0, 0)");
      });
});
