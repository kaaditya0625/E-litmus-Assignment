// Set the interval for capturing and sending images (in milliseconds)
const interval = 180000; // 3 minutes

// Get the user's webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // Display the user's webcam feed on the page
    const video = document.createElement('video');
    video.srcObject = stream;
    document.body.appendChild(video);
    
    // Set the interval for capturing and sending images
    setInterval(() => {
      // Create a canvas to capture the image
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL();
      
      // Send the image to the backend server
      fetch('https://backend-server.com/images', {
        method: 'POST',
        body: JSON.stringify({ image: dataURL }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }, interval);
  })
  .catch(error => console.error(error));
