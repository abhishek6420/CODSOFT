document.addEventListener('DOMContentLoaded', function() {
    console.log("Rajasthan Tourism Landing Page Loaded");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Thank you for your message! We will get back to you soon.');
        this.reset(); 
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('successModal').style.display = 'block';
    
    this.reset();
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});