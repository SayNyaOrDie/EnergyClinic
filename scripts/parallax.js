document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const parallaxImage = document.querySelector('.background-image');
    parallaxImage.style.transform = `translateY(${scrolled * 0.35}px)`;
});
