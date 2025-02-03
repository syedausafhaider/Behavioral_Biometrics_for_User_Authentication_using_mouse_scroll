# Mouse Movement Tracker

## Overview
The **Mouse Movement Tracker** is a Chrome extension designed to collect mouse movement data from users. It captures events like `mousemove`, `click`, and `scroll` and sends the data to a backend server or stores it locally for analysis. This extension can be used for applications such as:

- Behavioral biometrics for user authentication.
- Fraud detection and anomaly detection.
- Research on human-computer interaction.

## Features
- **Data Collection**: Captures mouse coordinates (x, y), click events, scroll events, and timestamps.
- **Background Processing**: Sends collected data to a backend server periodically.
- **Optional Popup UI**: Provides a simple interface for users to interact with the extension (e.g., clear stored data).
- **Cross-Site Compatibility**: Works on all websites (`<all_urls>`).

## Installation
### Prerequisites
- Google Chrome browser installed on your system.
- A backend server (optional) to receive and process the collected data.

### Steps
1. Clone or download this repository.
   ```bash
   git clone https://github.com/syedausafhaider/Behavioral_Biometrics_for_User_Authentication_using_mouse_scroll/mouse-movement-tracker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will appear in the list of installed extensions.

## Usage
### Interacting with the Extension
- Visit any website and interact with it (move your mouse, click, scroll).
- The extension will capture your interactions and send the data to the backend server (if configured).
- Optionally, click the extension icon in the toolbar to open the popup UI and clear stored data.

### Backend Integration
If you want to send the collected data to a backend server:

1. Update the fetch URL in `background.js` to point to your server:
   ```javascript
   fetch('https://your-backend-server.com/save-mouse-data', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data),
   });
   ```
2. Ensure your backend server is running and capable of handling POST requests.

## Development
### Folder Structure
```
mouse-movement-tracker/
│
├── manifest.json       # Defines the extension's metadata and permissions
├── content.js          # Captures mouse events on web pages
├── background.js       # Handles data storage or transmission
├── popup.html          # Optional: Provides a user interface for the extension
├── popup.js            # Optional: Adds functionality to the popup UI
└── icons/              # Folder containing extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### Customization
- **Manifest File**: Modify `manifest.json` to add new permissions or change the extension's behavior.
- **Content Script**: Update `content.js` to capture additional events (e.g., keyboard input).
- **Backend Server**: Replace the placeholder URL in `background.js` with your server's endpoint.

## Key Considerations
### Privacy
- Inform users about the data being collected and obtain their consent.
- Anonymize data before storing or transmitting it to comply with privacy regulations like **GDPR**.

### Security
- Use **HTTPS** for secure data transmission.
- Encrypt sensitive data to protect against unauthorized access.

### Performance
- Avoid excessive data collection to prevent performance degradation.
- Send data in batches to reduce overhead.

### Scalability
- Ensure the extension can handle large datasets and multiple users.

## Contributing
We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature or fix"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a **pull request**.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Contact
For questions or feedback, feel free to reach out:

- **Email**: syedausafhaider@gmail.com
- **GitHub**: [@syedausafhaider](https://github.com/your-github-username)

## Acknowledgments
- Inspired by research on **behavioral biometrics** and **user authentication**.
- Built using **Chrome Extension APIs** and modern **JavaScript** practices.

Thank you for using the **Mouse Movement Tracker Chrome Extension**! We hope it serves as a valuable tool for your projects.
