// device-detection.js

// Check if the user is using a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Redirect to mobile landing page if the user is on a mobile device
function redirectIfMobile() {
    if (isMobileDevice()) {
        window.location.href = "mobile-landing-page.html";
    }
}

// Call the redirect function when the page loads
window.onload = redirectIfMobile;
