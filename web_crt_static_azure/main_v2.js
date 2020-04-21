console.log('ml5 version:', ml5.version);

'use strict';
// https://stackoverflow.com/questions/48201395/how-to-post-image-instead-of-url-in-microsoft-azure-analyze-image-api-using-java
// https://stackoverflow.com/questions/34047648/how-to-post-an-image-in-base64-encoding-via-ajax/34064793#34064793
let makeblob = function (dataURL) {
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = decodeURIComponent(parts[1]);
                return new Blob([raw], { type: contentType });
            }
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;

            var uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            return new Blob([uInt8Array], { type: contentType });
        }

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
let rNum = 0;
let objList = [''];

var subscriptionKey = "3dd2d8e1cbd146b7bf31de8a11ed2580";
var endpoint = "https://showme.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Description&vision/v2.1/analyze?visualFeatures=Categories%2CDescription%2CColor&details=&language=en";
let newBlob,retrievedData;

const button = document.querySelector('button');
button.onclick = function() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    dataURL = canvas.toDataURL();
//    newBlob = makeblob(dataURL);
  //  console.log(newBlob);
  processImage(dataURL);



    if (objList.indexOf(retrievedData) !== -1){
        console.log("value exists");
    }else{
        objList.push(retrievedData);
        $('#story--entry').append('<li>' + retrievedData + '</li>');
        $('#story--entry').append('<input placeholder="what happened next..."> </input>');

        $("#camera--trigger").html('Show me something... ' + '<b>' + '' + '</b>');
    };


}

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



function processImage(dataPath) {
    let data = dataPath;

    $.ajax({
        url: endpoint,

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/octet-stream");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",
        processData: false,
        // contentType: 'application/octet-stream',
        // Request body.
        data: makeblob(dataPath)
    })

    .done(function(data) {
        // Show formatted JSON...
        // console.log(JSON.stringify(data, null, 2));
        console.log(data);
        // retrievedData = parseData(data);
        // retrievedData = data; //retrievedData.description.captions[0].text
        retrievedData = data.description.captions[0].text;


    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " :
            errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" :
            jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
};

function parseData(data){

}
