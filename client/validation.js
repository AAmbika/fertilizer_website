<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("request").addEventListener("submit", function(event) {
            event.preventDefault();
            var fullName = document.querySelector('input[name="Full Name"]').value.trim();
            var email = document.querySelector('input[name="Email"]').value.trim();
            var phoneNumber = document.querySelector('input[name="Phone Number"]').value.trim();
            var message = document.querySelector('textarea[name="Message"]').value.trim();
            var valid = true;

            // Validation for Full Name
            if (fullName === "") {
                valid = false;
                alert("Please enter your full name.");
            }

            // Validation for Email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                valid = false;
                alert("Please enter a valid email address.");
            }

            // Validation for Phone Number
            var phoneRegex = /^\d{10}$/; // assuming 10 digit phone number
            if (!phoneRegex.test(phoneNumber)) {
                valid = false;
                alert("Please enter a valid phone number.");
            }

            // Validation for Message
            if (message === "") {
                valid = false;
                alert("Please enter your message.");
            }

            // If all fields are valid, submit the form
            if (valid) {
                event.target.submit();
            }
        })
    })
</script>
