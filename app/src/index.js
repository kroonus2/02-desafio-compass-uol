let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenu) {
    const isMenuVisible = mobileMenu.classList.contains("hidden");

    if (isMenuVisible) {
      mobileMenu.classList.remove("hidden"); // Mostra o menu
    } else {
      mobileMenu.classList.add("hidden"); // Esconde o menu
    }
  }
  console.log("clicou");
}

function showSlide(index) {
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Inicializar o carrossel mostrando o primeiro slide
showSlide(currentSlideIndex);
