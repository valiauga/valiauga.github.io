$(document).ready(function(){
//        $('body').css('display', 'none');
//        $('body').fadeIn(500).delay(3000).$('#copy-style').fadeIn(500);
    $('#pop-up-1, #pop-up-2' ).hide();

    $('.button-1, .button-2, .button-3').hover(function(){
       $(this).css("text-decoration","underline");
        $(this).mouseout(function(){
            $(this).css("text-decoration","none");
        });
    });

    $('.button-1').click(function(){
        $('#pop-up-1').fadeIn(100);
    });
    
    $('.button-2').click(function(){
        $('#pop-up-2').fadeIn(100);
    });

    $('.close-button').click(function(){
        $('#pop-up-1, #pop-up-2').fadeOut(100).$(this).hide();
    });
});    