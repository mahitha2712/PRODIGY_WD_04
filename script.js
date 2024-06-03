// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        target.style.display = 'block';
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initial hiding of all sections except header
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
});

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
    } else {
        alert('Your message has been sent. Check your mail.');
        this.reset();
    }
});
