document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Redirect to the home page
    window.location.href = "index.html"; // Ensure index.html is in the same directory
});
