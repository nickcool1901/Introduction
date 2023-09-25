function toggleMenu() {
  var leftMenu = document.querySelector('.left-menu');
  if (leftMenu.style.left === '-50vw' || leftMenu.style.left === '') {
    leftMenu.style.left = '0';
  } else {
    leftMenu.style.left = '-50vw';
  }
}