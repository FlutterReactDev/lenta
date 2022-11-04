document.addEventListener("DOMContentLoaded", function () {
  accardion();
});

function accardion() {
  const accardions = document.querySelectorAll(".feedback__accardion");
  accardions.forEach((accardion) => {
    accardion.addEventListener("click", function () {
      this.classList.toggle("feedback__accardion--active");
      const content = this.childNodes[3];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
