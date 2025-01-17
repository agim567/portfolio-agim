// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
  header.classList.add("navbar-fixed");
  } else {
  header.classList.remove("navbar-fixed");
  }
  };
  // Hamburger
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('.zoomable-image').forEach(image => {
      image.addEventListener('click', function() {
          this.classList.toggle('zoomed'); // Toggle class 'zoomed' saat diklik
      });
  });
  
  // Fungsi untuk mengaktifkan dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

// Fungsi untuk menonaktifkan dark mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}

// Fungsi untuk memeriksa apakah dark mode sudah diaktifkan
function checkDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Tombol untuk mengaktifkan dan menonaktifkan dark mode
const darkModeButton = document.getElementById('dark-mode-button');

darkModeButton.addEventListener('click', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Memeriksa apakah dark mode sudah diaktifkan saat halaman dimuat
checkDarkMode();