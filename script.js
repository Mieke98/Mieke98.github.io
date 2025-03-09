// Добавляем интерактивность для заголовков секций
const sectionHeaders = document.querySelectorAll('section h2');

sectionHeaders.forEach(header => {
    header.addEventListener('mouseover', () => {
        header.style.color = '#007BFF'; // Меняем цвет при наведении
    });

    header.addEventListener('mouseout', () => {
        header.style.color = '#333'; // Возвращаем исходный цвет
    });
});