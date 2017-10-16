//APPLY FUNCIONS TO ALL BUTTONS + SOUNDS + FUNCION OR OBJECT FOR BUTTONS + WIN MECHANICS

var humanScore; var computerScore;
var humanScoreUpdate = 0; 
var computerScoreUpdate = 0;
console.log(humanScoreUpdate);
var game = ['vas', 'ki', 'ci', 'vas', 'ki', 'ci','vas', 'ki', 'ci', 'vas', 'ki', 'ci'];
console.log(game);







var vasHover = function(){
//   console.log("vasHover"); 
    
   var gestureVAS = game[0];
   console.log(gestureVAS);

   var imageVAS = document.querySelector('#player1');
   var el = $("#player-1");
    
   $('#player-1').css("background-image", "url(graphics/p1/" + gestureVAS + ".png");
} 

var vasClicked = function(){
   var counter = 0;
   var interval = window.setInterval(timeout,500);    
   var myRandomNumber;
   var gestureVAS2;

   humanScore = 'vas';    
    
    function timeout(){
        counter += 1;
        myRandomNumber = (Math.round(Math.random(11)*10));

        if (counter <= 4){
            gestureVAS2 = game[myRandomNumber];
            console.log("myRandomNumber " + myRandomNumber);
            //console.log(gestureVAS2);
    
            var imageVAS2 = $('#player-2');
            $('#player-2').css("background-image", "url(graphics/p2/" + gestureVAS2 + ".png");  
            
            computerScore = gestureVAS2;
            }

        if (counter == 5){                
            if (computerScore === "ki"){
                humanScoreUpdate += 1;
                computerScoreUpdate += 0;
            }
            if (computerScore === "ci"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 1;
            }
            if (computerScore === "vas"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 0;
            }        
        }
        
        //console.log("humanScoreUpdate: " + humanScoreUpdate + " computerScoreUpdate: " + computerScoreUpdate);
        
        $('#player-info-1').html("Human-A: <br>" + "<u>" + humanScoreUpdate + "</u>");
                
        $('#player-info-2').html("Computer-B:<br>"+"<u>" + computerScoreUpdate + "</u>" + "&nbsp;");
        } //timeout closing
} //function closing  

 //has to be init after functions declared actually! 
 $('#vas').click(vasClicked).hover(vasHover);


var kiHover = function(){
// console.log("kiHover");

   var gestureKI = game[1];
   console.log(gestureKI);

   var imageKI = document.querySelector('#player1');
   var el = $("#player-1");
    
   $('#player-1').css("background-image", "url(graphics/p1/" + gestureKI + ".png");  

}
var kiClicked = function(){
   var counter = 0;
   var interval = window.setInterval(timeout,500);    
   var myRandomNumber;

   humanScore = 'ki';    
    
    function timeout(){
        counter += 1;
        //myRandomNumber = (Math.round(Math.random(5)));
        myRandomNumber = (Math.round(Math.random(11)*10));

        if (counter <= 4){
            var gestureVAS2 = game[myRandomNumber];
            console.log(myRandomNumber);
            //console.log(gestureVAS2);
    
            var imageVAS2 = $('#player-2');
            $('#player-2').css("background-image", "url(graphics/p2/" + gestureVAS2 + ".png");  
            }
        
        if (counter <= 4){
            gestureVAS2 = game[myRandomNumber];
            console.log("myRandomNumber " + myRandomNumber);
            //console.log(gestureVAS2);
    
            var imageVAS2 = $('#player-2');
            $('#player-2').css("background-image", "url(graphics/p2/" + gestureVAS2 + ".png");  
            
            computerScore = gestureVAS2;
            }

        
        if (counter == 5){                
            if (computerScore === "ki"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 0;
            }
            if (computerScore === "ci"){
                humanScoreUpdate += 1;
                computerScoreUpdate += 0;
            }
            if (computerScore === "vas"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 1;
            }        
        }
        
        //console.log("humanScoreUpdate: " + humanScoreUpdate + " computerScoreUpdate: " + computerScoreUpdate);
        //        
        $('#player-info-1').html("Human-A: <br>" + "<u>" + humanScoreUpdate + "</u>");
                
        $('#player-info-2').html("Computer-B:<br>"+"<u>" + computerScoreUpdate + "</u>" + "&nbsp;");
        }
      
    } //function closing!      


//has to be init after functions declared actually! 
$("#ki").hover(kiHover).click(kiClicked);


var ciHover = function(){
 //console.log("ciHover");

   var gestureCI = game[2];
   console.log(gestureCI);

   var imageCI = document.querySelector('#player1');
   var el = $("#player-1");
    
   $('#player-1').css("background-image", "url(graphics/p1/" + gestureCI + ".png");   
}
var ciClicked = function(){
   var counter = 0;
   var interval = window.setInterval(timeout,500);    
   var myRandomNumber;

   humanScore = 'ci';    
    
    function timeout(){
        counter += 1;
        //myRandomNumber = (Math.round(Math.random(5)));
        myRandomNumber = (Math.round(Math.random(11)*10));

        if (counter <= 4){
            var gestureVAS2 = game[myRandomNumber];
            console.log(myRandomNumber);
            //console.log(gestureVAS2);
    
            var imageVAS2 = $('#player-2');
            $('#player-2').css("background-image", "url(graphics/p2/" + gestureVAS2 + ".png");  
            
            computerScore = gestureVAS2;
        }        
    
    
   if (counter == 5){                
            if (computerScore === "ki"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 1;
            }
            if (computerScore === "ci"){
                humanScoreUpdate += 0;
                computerScoreUpdate += 0;
            }
            if (computerScore === "vas"){
                humanScoreUpdate += 1;
                computerScoreUpdate += 0;
            }        
        }
    
        $('#player-info-1').html("Human-A: <br>" + "<u>" + humanScoreUpdate + "</u>");        
        $('#player-info-2').html("Computer-B:<br>"+"<u>" + computerScoreUpdate + "</u>" + "&nbsp;");    

    } //timeout closing
} //function closing

//has to be init after functions declared actually! 
$('#ci').hover(ciHover).click(ciClicked)

//var audio = document.getElementsByTagName("audio")[0];
var audio = $("audio")[0];


document.getElementById("vas").onmouseover = function(){
    console.log("bla");
    audio_vas.play();
};

document.getElementById("ki").onmouseover = function(){
    console.log("bla");
    audio_ki.play();
};

document.getElementById("ci").onmouseover = function(){
    console.log("bla");
    audio_ci.play();
};


var audio_vas = new Audio('audio/vas.wav');
//audio_vas.play();

var audio_ki = new Audio('audio/ki.wav');
//audio_ki.play();

var audio_ci = new Audio('audio/ci.wav');
//audio_ci.play();


//var audio = $("#sound-1")[0];
//$("#vas").mouseenter(function() {
//  audio.play();
//});

/* fade in the whole div when the document is ready!
https://tinyurl.com/ydhk3nfk */
$(document).ready(function() {
    $('#very-specific-design').fadeIn(400);
});
