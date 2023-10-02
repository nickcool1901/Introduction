const allSelects = document.querySelectorAll('.change-lang');
const allLang = ['en', 'ru', 'lv'];

import { langArr } from './lang.js';

// Добавьте обработчик события change для каждого селектора
allSelects.forEach(select => {
  select.addEventListener('change', changeURLLanguage);
});

// Адрес к URL с выбранным языком
function changeURLLanguage(event) {
  let lang = event.target.value; // Получаем выбранный язык из целевого элемента (селекта)
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  // console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#lv';
    location.reload();
  }
  
  // Устанавливаем значение во всех селекторах
  allSelects.forEach(select => {
    select.value = hash;
  });

  // Используйте langArr из вашего импортированного файла
  // document.querySelector('title').innerHTML = langArr['unit'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key)
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

// Вызов функции после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  changeLanguage();
});
