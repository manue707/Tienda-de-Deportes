document.addEventListener('DOMContentLoaded', () => {
    const menuTop = document.getElementById('menu_top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menuTop.classList.add('scrolled');
        } else {
            menuTop.classList.remove('scrolled');
        }
    });
});
