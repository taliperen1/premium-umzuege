const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("is-open"));
  });
}

// Reveal on scroll
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });
items.forEach(el => io.observe(el));

// Demo submit (ersetzen durch echtes Backend/Form-Service)
function wireForm(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("submit:", formId, data);

    if (status) status.textContent = "Danke! Gesendet (Demo).";
    form.reset();
  });
}
wireForm("dateForm", "dateStatus");
wireForm("contactForm", "contactStatus");
