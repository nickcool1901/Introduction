function toggleMenu() {
    var leftMenu = document.querySelector('.left-menu');
    if (leftMenu.style.top === '-200vh' || leftMenu.style.top === '') {
      leftMenu.style.top = '0';
    } else {
      leftMenu.style.top = '-200vh';
    }
  }  