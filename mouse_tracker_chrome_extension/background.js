chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "MOUSE_DATA") {
    const data = message.data;

    // Send data to the backend server
    fetch('https://your-backend-server.com/save-mouse-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Data saved:', result);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  }
});