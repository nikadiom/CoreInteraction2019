$(document).ready(function(){

// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
};
// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);


                 
    
    
    var doc = $(document);
    
    
    var width = $(document).width() + 100 ;        
    var height = $(document).height() + 100;   
                 
                 
                 
                 
      var shapes = [ $("#one"), $("#two"), $("#four"), $("#three"), $("#five") ]           
                 
                 
       function randomStuff() {        
      var randomShape =  shapes[ Math.floor( Math.random() * shapes.length) ]          
      var clone = randomShape.clone().appendTo('body');         
     
      clone.last().css('left', Math.random() * width)
    clone.last().css('top', Math.random() * height)
           
            clone.last().css('width', Math.random() * width)
    clone.last().css('height', Math.random() * height)
   } 
    
      
      
     setInterval(function(){
         
         randomStuff();}, 1000) 
      
      
      
        })
      
