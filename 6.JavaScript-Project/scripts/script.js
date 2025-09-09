document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-notes-button");
  const popup = document.querySelector(".add-notes-pop-up");
  const closeBtn = document.querySelector(".add-notes-form .close");

  if (!addBtn || !popup || !closeBtn) {
    console.log("Required elements not found!");
    return;
  }

  // Open popup
  addBtn.addEventListener("click", () => {
    popup.classList.add("show");
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Close when clicking outside popup content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.classList.remove("show");
    }
  });
});
