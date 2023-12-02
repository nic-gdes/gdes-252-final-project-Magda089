// Hamburger Menu
function toggleMenu() {
  var x = document.getElementById("navLinks");
  x.classList.toggle("show");
}

// Modal
document.addEventListener('DOMContentLoaded', function () {
  var showButton = document.querySelector('.show');
  var mask = document.querySelector('.mask');
  var modal = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');

  showButton.addEventListener('click', function () {
    mask.style.display = 'block';
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    mask.style.display = 'none';
    modal.style.display = 'none';
  });
});

