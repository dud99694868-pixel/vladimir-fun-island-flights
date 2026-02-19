// script.js

// Smooth scrolling navigation
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button click handlers
const buttons = document.querySelectorAll('.button-class');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Add functionality for button click
        console.log('Button clicked:', this.innerText);
    });
});

// Scroll animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add your animation class
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});