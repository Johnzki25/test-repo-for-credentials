window.addEventListener('load', function () {
    const progressBar = document.getElementById('progress-bar');
    const flame = document.getElementById('flame');

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // Optionally, add functionality to hide the loading screen and show the main content
        } else {
            width += 1;
            progressBar.style.width = width + '%';
            flame.style.left = `calc(${width}% - 30px)`; // Adjust flame position
        }
    }, 30); // Adjust speed
});