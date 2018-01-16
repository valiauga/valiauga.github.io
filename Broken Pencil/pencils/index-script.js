$(document).on("mousemove",function(ev){
  
   var mouseMoveX  = ev.originalEvent.pageX
   var mouseMoveY  = ev.originalEvent.pageY
   
   $("img").each(function(){
       var imgX = $(this).position().left + 80
       var imgY = $(this).position().top + 80
       
       var diffX = mouseMoveX - imgX
       var diffY = mouseMoveY - imgY
       
       var radians = Math.atan2(diffY, diffX)
       var angle = radians * 180 / Math.PI
       
       $(this).css("transform", "rotate(" + angle + "deg)")
   })
})


    
  

