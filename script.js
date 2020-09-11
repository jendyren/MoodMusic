//document.body.style.backgroundImage = "linear-gradient(-100deg, lightblue, purple)"


var video = document.getElementById('video');

function startVideo(){
  navigator.getUserMedia(
    {video: true},
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}


Promise.all([
  //faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)


