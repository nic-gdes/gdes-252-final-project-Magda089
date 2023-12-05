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

// Calculation Tool

function convertToCelsius () {
  const farenheit = parseFloat (document.getElementById('inputNumber').value);
  const celsius = (farenheit - 32) * 5/9;
  displayResult(celsius);
}
function convertToMiles () {
  const feet = parseFloat (document.getElementById('inputNumber').value);
  const miles = feet / 5280;
  displayResult(miles);
}
function convertToCentimeters () {
  const inches = parseFloat (document.getElementById('inputNumber').value);
  const centimeters = inches * 2.54;
  displayResult(centimeters);
}

function displayResult(result) {
  document.getElementById('result').innerText = `Result: ${result.toFixed(2)}`;
}

// Darko Mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}