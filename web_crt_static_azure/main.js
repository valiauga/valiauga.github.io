console.log('ml5 version:', ml5.version);

'use strict';

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

let mobilenet;
let dataURL;
let img;
let label;
let prompt = ['yellow','green','square','round','soft','blue','triangle','sharp'];
console.log("number pf prompts " + prompt.length);
let rNum = 0;
let objList = [''];



const button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    dataURL = canvas.toDataURL();
    imgLoad(dataURL);


    if (objList.indexOf(label) !== -1){
        console.log("value exists");
    }else{
        objList.push(label);
        $('#story--entry').append('<li>' + label + '</li>');
        $('#story--entry').append('<input placeholder="what happened next..."> </input>');

        $("#camera--trigger").html('Show me something... ' + '<b>' + prompt[Math.round(Math.random(prompt.length))] + '</b>');
    };

    console.log(Math.round(random(prompt.length)))
}

// Camera handling...
const constraints = {
    audio: false,
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

//Prompt shuffling
let promptNum = function(number){
  let shuffleNum;
  if number != prev_num{
  Math.round(Math.random(number)*10)
  }
  return number;
}
