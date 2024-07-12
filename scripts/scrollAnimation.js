document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом .service-item
    const serviceItems = document.querySelectorAll('.service-item');

    // Функция для проверки видимости элемента в области просмотра
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Функция для добавления класса .in-view к элементам, когда они появляются в области просмотра
    function animateOnScroll() {
        serviceItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('in-view');
            }
        });
    }

    // Слушаем событие прокрутки и вызываем функцию animateOnScroll
    window.addEventListener('scroll', animateOnScroll);

    // Вызываем функцию animateOnScroll при загрузке страницы
    animateOnScroll();
});
