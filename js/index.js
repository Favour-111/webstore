document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].offsetWidth;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  }

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  }

  setInterval(nextSlide, 2000); // Change slide every 2 seconds

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
});
