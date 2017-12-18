$( document ).ready(function() {

$( ".cross" ).hide();
$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});
    
});

var user_int = false;
          
var slideshow_toggle = function(which_pair_i){
    var slide_show_text = ["#string-1","#string-2","#string-3","#string-4"];
    var image_color = ["gree","red","blue","yellow"];
    
    var pass_in_which_string = which_pair_i; 
    var pass_in_which_color = which_pair_i; 
    
    $(function(){
        
    $(slide_show_text[pass_in_which_string]).fadeTo(300,0.1);
    $("#img-1").fadeTo(300,1).animate().css({'background-color' : image_color[pass_in_which_color]});
        setTimeout(function(){
            $(slide_show_text[pass_in_which_string]).fadeTo(300,1);
            $("#img-1").fadeTo(300,0).animate().css({'background-color' : image_color[pass_in_which_color]});
            },4400);
    });    
}          //slideshow-function
          
$(function(){
   var loop = 0;
   var r_slide_show_image = 0;
   
   setInterval(function(){
       if (user_int == false){
       r_slide_show_image = Math.floor(Math.random()*4);
       console.log("random number" + r_slide_show_image);
       slideshow_toggle(r_slide_show_image);
       }
   },5000); 
});

var hover_state = function(which_string , image_color){
    
    var image_holder = image_color;
    var string_holder = which_string;
    
    $(which_string).hover(function(){
        $(this).fadeTo(300,0.1);
        $('#img-1').fadeTo(300,1).animate().css({'background-color' : image_color});
        //need to disable slideshow when user hovers on
        user_int = true;
        }),
    $(which_string).mouseleave(function(){
        $(this).fadeTo(300,1);
        $('#img-1').fadeTo(300,0);
        //need to enable slideshow when user hovers off
        user_int = false;
    });
    
}          //hover-function



$(hover_state("#string-1" , "green"));
$(hover_state("#string-2" , "red"));
$(hover_state("#string-3" , "blue"));          
$(hover_state("#string-4" , "yellow"));          


