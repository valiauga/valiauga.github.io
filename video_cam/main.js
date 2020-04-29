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
let prompt = ["Something wobbly", "Something that looks like your spirit animal","Something brave","Something precious","Something messy","Something that’s older than you","Something cozy","Something smelly","Something scratchy","Something silly","Something rare" ,"Your favourite thing","The most useful thing you own","Something you want to throw away","The bigger thing you can find","The smallest thing you can find","The thing in your house you are proudest of","Something that is lower than your ankle", "Something liquid", "The first object you see when you walk in the door","Something that starts with the first letter of your name",
"The thing in your house that’s most like a banana", "Something fuzzy"];

console.log("number pf prompts " + prompt.length);
let rNum = 0;
let objList = [''];

let svg_num =1;
let base_img;

$( document ).ready(function() {
    $("#camera--trigger").html(prompt[Math.round(Math.random(prompt.length)*10)]);
    // $( '#camera--overlay' ).attr("src","svg/shape-0" + Math.floor(Math.random(100)*10) + ".svg");console.log(Math.floor(Math.random(10)*10));
    $( '#camera--overlay' ).attr("src","svg/shape-0" + Math.floor(Math.random(1,9)*10)+ ".svg");
});

const b_next = document.getElementById('camera--next');
const button = document.querySelector('button');

button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);


    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);


    // console.log(canvas.toDataURL());
    // base_img = canvas.toDataURL();
    // $('#the--image').attr("href", base_img);

}//BTN...


b_next.onclick = function() {

  $( '#camera--overlay' ).attr("src","svg/shape-0" + svg_num + ".svg");
  console.log(svg_num);
  svg_num +=1;
  if (svg_num > 9) {
    svg_num = 1;
  }

  canvas.width = 0;
  canvas.height = 0;

  $("#camera--trigger").html(prompt[Math.round(Math.random(prompt.length)*10)]);
  console.log("prompt " + Math.round(Math.random(prompt.length)*10));


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

// document.getElementById('clear').addEventListener('click', function() {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//       }, false);
