'use strict'

$( document ).ready(function() {
    $(".menu-item").hover(function(){
        $(this).css("color", "#488eff");
        }, function(){
        $(this).css("color", "#232323");
    });
    
    $(".client").hover(function(){
        $(this).css("transform", "scale(0.90,0.90)");
        }, function(){
        $(this).css("transform", "scale(1,1)");
      });
});
