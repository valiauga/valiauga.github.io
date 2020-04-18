console.log('ml5 version:', ml5.version);
//console.log('p5 version:', p5.version);

'use strict';

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video'),
      canvas = window.canvas = document.querySelector('canvas'),
      button = document.querySelector('button');

//P5
let dataURL;
let placeholderURL = 'placeholder.png';
let img;
let mobilenet,
    label = "",
    objList = [];

let prompt = ['yellow','green','square','round','soft','blue','triangle','sharp'];
let rNum = 0;


canvas.width = 480;
canvas.height = 360;


button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    
    dataURL = canvas.toDataURL();
//    console.log(dataURL);
    imgLoad(dataURL);
    predict();
    
    if (objList.indexOf(label) !== -1){
        console.log("value exists");
    }else{
    objList.push(label);
        $('.storry--entry').append('<li>' + label + '</li>');
        $('.storry--entry').append('<input> </input>');
        
//        $('.prompt--2').text(prompt[Math.random(prompt.length)]);
        rNum = Math.round(Math.random(5));
        console.log(rNum)
        $(".prompt--2").html('<b>' + prompt[rNum] + '</b>');
    }

};

const constraints = {
  audio: false,
//  video: true
    video: {
        facingMode: "environment"
    }
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);


let bg;
let y = 0;

function imgLoad(path){
    img = loadImage(path);
    mobilenet = ml5.imageClassifier('MobileNet',modelReady)
    predict();

}



function gotResults(err, results){
    if(err){
        console.log(err);
    }else{
        label = results[0].label;
//        console.log(results[0].label + " " + results[0].confidence)
        console.log(results[0]);
        
//        label = label.replace(',', 'and');
    }
}

function modelReady(){
    console.log("model ready");
    label = "model ready";
    fill(0);
    textSize(32);
    text(label, 10, 300);
}

function predict(){
 mobilenet.predict(img,gotResults);      
    
}

function setup() {

  imgLoad(placeholderURL);  
  createCanvas(460, 360);
  
}

function draw() {
  background(img);

//  stroke(226, 204, 0);
//  line(0, y, width, y);
//
//  y++;
//  if (y > height) {
//    y = 0;
//  }
//    fill(0);
//    textSize(16);
//    text("show me something...", 10, 300);
}
