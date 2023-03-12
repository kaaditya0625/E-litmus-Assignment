const recordButton = document.getElementById('record-button');

// Get the video element from the HTML DOM
const video = document.getElementById('live-video');

// Set the constraints for the video stream (e.g. resolution, framerate)
const constraints = {
    video: {
        width: 320,
        height: 240,
        frameRate: 30,
    },
    audio: true,
};

// Initialize a MediaRecorder object with the video stream and options


// Add a click event listener to the record button to start recording
// let mediaRecorder;
let videoStream;
recordButton.addEventListener('click', function () {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser does not support webcam access. Please use a modern browser.");
        return;
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
            videoStream = stream;
            video.srcObject = stream;
                video.play();
            // mediaRecorder = new MediaRecorder(stream);
            // mediaRecorder.ondataavailable = function (e) {
            //     chunks.push(e.data);
            // };
            // mediaRecorder.onstop = function () {
            //     const blob = new Blob(chunks, { 'type': 'video/webm; codecs=vp9' });
            //     video.src = window.URL.createObjectURL(blob);
            // };
        })
        .catch(function (err) {
            console.log('Error getting media stream:', err);
        });
    // mediaRecorder.start();
});

// Add a click event listener to the stop button to stop recording
const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', function () {
    video.pause();
  video.srcObject = null;
  videoStream.getTracks().forEach(function(track) {
    track.stop();
  });
    // mediaRecorder.stop();
});






//   // Check the audio and video requirements
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
//     // Display the webcam feed
//     const videoElement = document.createElement("video");
//     videoElement.srcObject = stream;
//     document.body.appendChild(videoElement);
//     videoElement.play();

//     // Initialize image proctoring
//     const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
//     let count = 0;
//     const intervalId = setInterval(async () => {
//       count++;
//       const blob = await imageCapture.takePhoto();
//       const formData = new FormData();
//       formData.append('image', blob);
//       const response = await fetch('http://localhost:3000/images/', {
//         method: 'POST',
//         body: formData,
//       });
//       console.log(`Image sent (${count})`);
//     }, 180000); // Send an image every 3 minutes (180000 ms)
//   } catch (error) {
//     alert("The audio and/or video requirements are not met. Please check your microphone and webcam settings and try again.");
//   }
//   });