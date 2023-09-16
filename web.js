let navbar = document.querySelector('.navbar');
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 1995,
    reset: true
});


sr.reveal(`.home-text,.home,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box,.image-container`, {
    interval: 150
})
