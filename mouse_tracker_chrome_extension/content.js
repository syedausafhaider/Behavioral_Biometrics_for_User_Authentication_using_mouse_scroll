// Array to store mouse events
const mouseEvents = [];

// Function to record mouse events
function recordMouseEvent(eventType, event) {
  const timestamp = Date.now();
  const eventData = {
    eventType: eventType,
    x: event.clientX,
    y: event.clientY,
    timestamp: timestamp,
    button: event.button, // 0: left click, 1: middle click, 2: right click
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
  };
  mouseEvents.push(eventData);

  // Send data to the background script periodically
  if (mouseEvents.length >= 50) { // Send after 50 events
    chrome.runtime.sendMessage({ type: "MOUSE_DATA", data: mouseEvents });
    mouseEvents.length = 0; // Clear the array after sending
  }
}

// Event listeners for mouse movements and clicks
document.addEventListener('mousemove', (event) => {
  recordMouseEvent('mousemove', event);
});

document.addEventListener('click', (event) => {
  recordMouseEvent('click', event);
});

document.addEventListener('scroll', (event) => {
  const timestamp = Date.now();
  const scrollData = {
    eventType: 'scroll',
    scrollX: window.scrollX,
    scrollY: window.scrollY,
    timestamp: timestamp,
  };
  mouseEvents.push(scrollData);
});