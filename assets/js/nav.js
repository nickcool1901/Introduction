// Функция, которая будет преобразовывать навигацию в список
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (window.matchMedia('(max-width: 768px)').matches) {
        // Если ширина окна меньше или равна 768px, создаем выпадающее меню
        if (!mobileMenu) {
            const mobileMenu = document.createElement('select');
            mobileMenu.classList.add('mobile-menu');

            const menuItems = menu.querySelectorAll('li');
            menuItems.forEach((menuItem) => {
                const option = document.createElement('option');
                const link = menuItem.querySelector('a');
                option.value = link.getAttribute('href');
                option.textContent = link.textContent;
                mobileMenu.appendChild(option);
            });

            mobileMenu.addEventListener('change', function () {
                const selectedOption = this.options[this.selectedIndex];
                if (selectedOption) {
                    window.location.href = selectedOption.value;
                }
            });

            menu.replaceWith(mobileMenu);
        }
    } else {
        // Если ширина окна больше 768px, возвращаем нормальное меню
        if (mobileMenu) {
            mobileMenu.replaceWith(menu);
        }
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', toggleMenu);
window.addEventListener('resize', toggleMenu);

// Также вызываем функцию сразу после загрузки страницы, чтобы установить начальное состояние
toggleMenu();
