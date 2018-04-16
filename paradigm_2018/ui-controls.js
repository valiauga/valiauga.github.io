//$('body').hide();        
var loader = $('#loader');

$('#canvas-ui').css('opacity',0);
$('body').prepend(loader);

$('#canvas-ui').fadeTo(0,0);
$(document).ready(function(){
    $(this).delay(2000);
    console.log("ready");
    $('#canvas-ui').fadeTo(2000,1);    
    //$('body').show();    
    //    $('body').fadeIn(1000);
    
//    $('body').css("opacity",1);    
    //    $('card').prop('disabled', true);

    $('h2-hover').hover(function(){
        console.log("card hover");
        $('h2-hover').fadeTo('slow',0.1);
    });

    $("#arrow_up").click(function() {
        console.log("arrow click");
        var offset = 80;
        $('html, body').animate({
        scrollTop: $("#about").offset().top + offset
        }, 1000);
    });


    //back to the top
    $('#arrow_bottom').click(function(){
        console.log("arrow_bottom");
        $('html,body').animate({scrollTop: document.body.scrollHeight},"slow"); 
    });

    var sH;
    $(window).scroll(function(){
        var content_canvas = $('.padding-100').css("opacity");
        sH = $(this).scrollTop();
        $('.padding-100').css("opacity",Math.max(0.001,sH/$(window).height())); 
        $('#arrow_up').css("opacity",Math.max(0.001,1-sH/$(window).height())); 
    });
});