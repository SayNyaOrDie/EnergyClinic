// Получение модального окна
const modal = document.getElementById('serviceModal');
const modalTitle = modal.querySelector('h2');
const closeBtn = modal.querySelector('.close');

// Пример данных услуг для каждого сервиса
const servicesData = {
    modal1: [
        { name: 'Название услуги 1', description: 'Описание услуги 1' },
        { name: 'Название услуги 2', description: 'Описание услуги 2' },
        // Добавьте больше услуг по мере необходимости
    ],
    modal2: [
        { name: 'Название услуги 3', description: 'Описание услуги 3' },
        { name: 'Название услуги 4', description: 'Описание услуги 4' },
        // Добавьте больше услуг по мере необходимости
    ],
    modal3: [
        { name: 'Название услуги 5', description: 'Описание услуги 5' },
        { name: 'Название услуги 6', description: 'Описание услуги 6' },
        // Добавьте больше услуг по мере необходимости
    ],
    modal4: [
        { name: 'Название услуги 7', description: 'Описание услуги 7' },
        { name: 'Название услуги 8', description: 'Описание услуги 8' },
        // Добавьте больше услуг по мере необходимости
    ],
    modal5: [
        { name: 'Название услуги 9', description: 'Описание услуги 9' },
        { name: 'Название услуги 10', description: 'Описание услуги 10' },
        // Добавьте больше услуг по мере необходимости
    ],
    // Добавьте больше модальных окон и соответствующих данных по мере необходимости
};

// Функция для открытия модального окна
function openModal(title, services) {
    modalTitle.textContent = title;

    // Очистка предыдущего содержимого таблицы
    const serviceTable = modal.querySelector('.service-table');
    serviceTable.innerHTML = '';

    // Добавление новых строк услуг в таблицу
    services.forEach(service => {
        const row = document.createElement('div');
        row.className = 'service-row';

        const nameCell = document.createElement('div');
        nameCell.className = 'service-cell';
        nameCell.textContent = service.name;

        const descriptionCell = document.createElement('div');
        descriptionCell.className = 'service-cell';
        descriptionCell.textContent = service.description;

        row.appendChild(nameCell);
        row.appendChild(descriptionCell);

        serviceTable.appendChild(row);

        // Добавление разделителя
        const divider = document.createElement('hr');
        divider.className = 'section-divider';
        serviceTable.appendChild(divider);
    });

    modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике на кнопку закрытия
closeBtn.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Добавление обработчиков событий на сервисные элементы для открытия модальных окон
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('.service-title').textContent;
        const modalId = this.getAttribute('data-modal');
        const services = servicesData[modalId] || [];
        openModal(title, services);
    });
});
