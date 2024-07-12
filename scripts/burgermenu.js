function toggleBurgerMenu() {
    var burgerMenu = document.getElementById('burger-menu');
    if (burgerMenu.classList.contains('show')) {
        burgerMenu.classList.remove('show');
        burgerMenu.classList.add('hide');
    } else {
        burgerMenu.classList.remove('hide');
        burgerMenu.classList.add('show');
    }
}

window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};
