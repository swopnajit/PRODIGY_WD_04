function toggleNavLinks() {
    const navLinks = document.querySelector('.nav__links');
    navLinks.classList.toggle('show');
}

function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
    });
}

document.querySelector('.nav__toggle').addEventListener('click', toggleNavLinks);

document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});