 document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your public key
    emailjs.init("k6587LpzvHLimjXW7");

    // Select the form element
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Get selected gender
        const gender = document.querySelector('input[name="gender"]:checked');
        const genderValue = gender ? gender.value : "Not Specified";

        // Prepare EmailJS template parameters
        const templateParams = {
            from_name: `${fname} ${lname}`,
            email: email,
            gender: genderValue,
            password: password, // 
        };

        // Send email using EmailJS
        emailjs
            .send("service_9igwrzi", "template_wekh6j9", templateParams)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Registration successful! You will receive an email confirmation.");
            })
            .catch(function (error) {
                console.error("FAILED...", error);
                alert("There was an error submitting the form. Please try again.");
            });
    });
});
