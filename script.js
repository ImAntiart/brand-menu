document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".swiper-slide");
  const toggleButton = document.getElementById("toggleCatalogButton");

  function getVisibleCount() {
    if (window.innerWidth <= 767) return 12;
    if (window.innerWidth >= 1120) return 8;
    return 6;
  }

  function hideExtraSlides() {
    const visibleCount = getVisibleCount();

    slides.forEach((slide, index) => {
      if (index >= visibleCount) {
        slide.classList.add("collapsed");
      } else {
        slide.classList.remove("collapsed");
      }
    });

    const hasMore = slides.length > visibleCount;
    toggleButton.style.display = hasMore ? "block" : "none";
  }

  function toggleSlides() {
    const visibleCount = getVisibleCount();
    const firstHiddenSlide = slides[visibleCount];
    const isCollapsed = firstHiddenSlide?.classList.contains("collapsed");

  slides.forEach((slide, index) => {
    if (index >= visibleCount) {
      if (isCollapsed) {
        slide.classList.remove("collapsed");
      } else {
        slide.classList.add("collapsed");
      }
    }
  });


  toggleButton.textContent = isCollapsed ? "Скрыть" : "Показать всё";
}

  hideExtraSlides();
  toggleButton.addEventListener("click", toggleSlides);
  window.addEventListener("resize", () => {
    hideExtraSlides();
  });
});
