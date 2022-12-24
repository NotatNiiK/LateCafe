let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
});

let links = document.querySelectorAll('.scrollLink');
for (let i = 0; i < links.length; i++) {
    const button = links[i];
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (burger.classList.contains('active')) {
            menu.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('lock');
        }
        if (button.getAttribute('data-selector')) {
            let selector = button.dataset.selector;
            let el = document.querySelector(selector);
            let coordinate = el.getBoundingClientRect().top + pageYOffset - 50;
            window.scrollTo({
                top: coordinate,
                behavior: 'smooth',
            });
        }
    });
}