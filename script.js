//document.body.style.backgroundImage = "linear-gradient(-100deg, lightblue, purple)"

// const KEY = "AIzaSyCsJY9a6FXo_lnTP0s7VcU3AKphygCAhEc"

const video = document.getElementById('video'),
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

function startVideo(){
  navigator.getUserMedia(
    {video: true},
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}
startVideo();

const url = 'https://vision.googleapis.com/v1/images:annotate?key=' + KEY;


// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
// ]).then(startVideo);

video.addEventListener("playing", () => {
  
  setInterval(async () => {
    context.drawImage(video, 0, 0);
    const img = canvas.toDataURL('image/jpeg', 0.5);
    
    
    
    const {labelAnnotations} = fetch(url, {
        method: 'POST',
        body: {"requests":[JSON.stringify(img)]}
    });

    console.log(labelAnnotations)

    // const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

    // var dominantEmotion = "neutral", dominantVal = 0;
    // if (detections.length != 0){
    //   for (var emotion in detections[0]["expressions"]){
    //     if (detections[0]["expressions"][emotion] > dominantVal){
    //       dominantVal = detections[0]["expressions"][emotion];
    //       dominantEmotion = emotion;
    //     }
    //   }

    //   console.log(dominantEmotion)
    //}
    
  }, 1000);
})

