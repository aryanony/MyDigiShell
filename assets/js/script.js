// Light & Dark Mode
const toggleBtn = document.getElementById('toggle-theme');

// toggleBtn.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

// On page load, apply saved theme and icon
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');

  // Change icon
  if (isDark) {
    toggleBtn.classList.replace('fa-moon', 'fa-sun'); // sun icon in dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.classList.replace('fa-sun', 'fa-moon'); // moon icon in light mode
    localStorage.setItem('theme', 'light');
  }
});


// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('.nav-list');

let isOpen = false;

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
  isOpen = !isOpen;
  hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
});