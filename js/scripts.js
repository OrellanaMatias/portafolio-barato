window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
});