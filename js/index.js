var $el = $("#very-specific-design");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

var $wrapper = $("#scaleable-wrapper");

var scaleOld;
var scale;
$wrapper.resizable({
  resize: doResize
});

$(window).resize(function(e){
    doResize(e);
})

function doResize(event) {

  var origin;
    
  scale = Math.min(
    $(window).width() / elWidth /*+0.3*/ %2 ,
    $(window).height() / elHeight
      
  );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ") "
  });
  console.log("scale "+scale);
}

var starterData = { 
  size: {
//    width: $wrapper.width(),
//    height: $wrapper.height()
      
//      width: $el.outerHeight(),
//      height: $el.outerWidth()
      
    width: $(window).width(),
    height: $(window).height()
  }
}
doResize(null, starterData);


function myFunction() {
    location.reload();
}

function checkScaleOnLoad(){
    scaleOld = Math.min(
    $(window).width() / elWidth /*+0.3*/ %2 ,
    $(window).height() / elHeight
        );
    console.log("scaleOld " + scaleOld);    
}
checkScaleOnLoad();  

function resizeW(){
    if (scale !== scaleOld){
        scale = scaleOld;
        console.log("bam");
    }
};

//window.addEventListener("resize",resizeW);
