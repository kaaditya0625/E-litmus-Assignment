// Get user media
navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(function(mediaStream) {
  // Display user media in popup
  const videoElement = document.createElement('video');
  videoElement.srcObject = mediaStream;
  videoElement.play();
  document.body.appendChild(videoElement);

  // Send images to backend server at configurable intervals using setInterval
  const sendImageInterval = setInterval(() => {
    const canvasElement = document.createElement('canvas');
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasElement.getContext('2d').drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    const imageDataUrl = canvasElement.toDataURL('image/png');
    
    // Send imageDataUrl to server using fetch
    fetch('/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: imageDataUrl })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send image data to server');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }, 3000);
}).catch(function(error) {
  // Handle error
  console.error(error);
});

  