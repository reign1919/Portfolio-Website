document.addEventListener("DOMContentLoaded", function() {
    // Get the element where the runtime will be displayed
    var runtimeElement = document.getElementById("runtime");

    // Initialize the start time
    var startTime = new Date();

    // Update the runtime every second
    setInterval(function() {
        // Calculate the elapsed time
        var currentTime = new Date();
        var elapsedTime = currentTime - startTime;

        // Convert milliseconds to hours, minutes, and seconds
        var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        // Format the elapsed time
        var formattedTime = hours + "h " + minutes + "m " + seconds + "s";

        // Update the runtime element with the formatted time
        runtimeElement.textContent = "Runtime: " + formattedTime;
    }, 1000); // Update every second
});

document.addEventListener("DOMContentLoaded", function() {
    // Scroll to about section when the About Me icon is clicked
    var aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var aboutSection = document.getElementById('about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Wait for the page to fully load
window.addEventListener('load', function () {
    // Hide the loader
    document.querySelector('.loader-container').style.display = 'none';
    // Show the content container
    document.querySelector('.content-container').style.display = 'block';
});
