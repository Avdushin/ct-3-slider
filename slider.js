document.addEventListener('DOMContentLoaded', () => {
    const slidesEl = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function update() {
        slidesEl.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
    });
    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        update();
    });

    update();
});