const CONTACT_EMAIL = "hello@harborpathcare.com"; // Change this before launch.

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

function encodeMailBody(form, formType) {
  const data = new FormData(form);
  const lines = [`New ${formType} submission from the Harbor Path MVP landing page:`, ""];

  data.forEach((value, key) => {
    lines.push(`${key}: ${value}`);
  });

  lines.push("", "Reminder: Do not ask families to send PHI through regular email.");
  return encodeURIComponent(lines.join("\n"));
}

document.querySelectorAll(".lead-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formType = form.dataset.formType || "Interest";
    const subject = encodeURIComponent(`Harbor Path ${formType}`);
    const body = encodeMailBody(form, formType);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  });
});
