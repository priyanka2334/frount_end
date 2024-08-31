document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can add more)
    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Thank you for reaching out!';
        
        // Reset the form after submission
        this.reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill all fields.';
    }
});
