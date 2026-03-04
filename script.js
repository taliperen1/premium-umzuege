const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function fakeSubmit(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // Hier könntest du z.B. an ein Backend / Email-Service senden.
    console.log("Form submit:", formId, data);

    if (status) status.textContent = "Danke! Deine Anfrage wurde gespeichert (Demo). Wir melden uns bald.";
    form.reset();
  });
}

fakeSubmit("quickForm", "quickStatus");
fakeSubmit("dateForm", "dateStatus");
fakeSubmit("contactForm", "contactStatus");