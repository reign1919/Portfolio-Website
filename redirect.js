// device-detection.js

// Check if the user is using a mobile device
function redirectToMobileLandingPage() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        window.location.href = "mobile-landing-page.html";
    }
}

// Call the redirection function when the page loads
window.onload = redirectToMobileLandingPage;
