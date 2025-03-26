document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll('.service-image');

    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            img.style.transform = "scale(1.2)";  // Enlarge image
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = "scale(1)";  // Reset size
        });
    });
});