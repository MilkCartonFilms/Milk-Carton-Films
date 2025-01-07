// Play and pause video on hover
function playVideoOnHover(event) {
    event.querySelector('video').play();
}

function pauseVideoOnHover(event) {
    event.querySelector('video').pause();
}

// Open the video in a popup
function openVideoPopup(videoUrl) {
    // Create a popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Create the video element
    const video = document.createElement('video');
    video.setAttribute('controls', 'true');
    video.setAttribute('autoplay', 'true');
    const source = document.createElement('source');
    source.setAttribute('src', videoUrl);
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);

    // Append the video to the popup
    popup.appendChild(video);

    // Create a close button for the popup
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popup); // Close the popup when the close button is clicked
    });
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
}

// Adding event listeners to play/pause videos on hover
document.querySelectorAll('.thumbnail-item').forEach(item => {
    item.addEventListener('mouseover', () => playVideoOnHover(item));
    item.addEventListener('mouseout', () => pauseVideoOnHover(item));
});

// Style for the popup (can be added to your main CSS file or as inline styles)
const popupStyle = `
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .popup video {
        max-width: 80%;
        max-height: 80%;
    }
    .close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: red;
        color: white;
        border: none;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
    }
    .close-button:hover {
        background-color: darkred;
    }
`;

// Append the styles to the document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = popupStyle;
document.head.appendChild(styleSheet);
