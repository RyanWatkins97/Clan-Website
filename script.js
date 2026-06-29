document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.members__container');
    const prevBtn = document.querySelector('.prev__btn');
    const nextBtn = document.querySelector('.next__btn');

    nextBtn?.addEventListener('click', () => {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    });

    prevBtn?.addEventListener('click', () => {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    });
});