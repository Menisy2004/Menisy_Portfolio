// Keep the footer year current.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Certificate lightbox: open a larger preview, close with the button, Esc or a click outside.
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  document.querySelectorAll(".cert").forEach((btn) => {
    btn.addEventListener("click", () => {
      img.src = btn.dataset.full;
      img.alt = btn.querySelector("img").alt;
      caption.textContent = btn.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });
}
