document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form elements
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Simple validation to check if fields are filled
    if (!name || !email || !message) {
        // Add error class if fields are empty
        if (!name) document.getElementById('name').classList.add('error');
        if (!email) document.getElementById('email').classList.add('error');
        if (!message) document.getElementById('message').classList.add('error');
        alert('Please fill in all fields.');
        
        // Prevent the form from submitting
        event.preventDefault();
    } else {
        // If all fields are filled, alert the user
        alert('Thank you, your message has been sent!');
        
        // Clear the form fields
        document.getElementById('name').value = ''; 
        document.getElementById('email').value = ''; 
        document.getElementById('message').value = ''; 
        // The form will automatically submit to Formspree
    }
});
