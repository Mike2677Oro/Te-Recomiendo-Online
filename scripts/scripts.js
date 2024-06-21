document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("testimonial-carousel");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    const cardWidth = carousel.querySelector(".testimonial").offsetWidth;
    const gap = parseInt(window.getComputedStyle(carousel).gap);

    rightArrow.addEventListener("click", () => {
        carousel.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener("click", () => {
        carousel.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
        });
    });
});

