// Mobile Navigation
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Prefill contact form from mini-form query params
const params = new URLSearchParams(window.location.search);
['fromZip','toZip','moveDate'].forEach(key => {
  const el = document.querySelector(`[name="${key}"]`);
  if (el && params.get(key)) el.value = params.get(key);
});