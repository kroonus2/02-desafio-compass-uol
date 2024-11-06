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

// Função para exibir o slide atual
function showSlide(index) {
  // Ajustar o índice para garantir que está no intervalo correto
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // Ocultar todos os slides e remover a classe 'active' dos dots
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Mostrar o slide atual e adicionar a classe 'active' ao dot correspondente
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].classList.add("active");
}

// Função para avançar para o próximo slide
function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

// Função para voltar ao slide anterior
function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

// Função para ir para um slide específico
function currentSlide(index) {
  showSlide(index - 1); // O índice dos dots começa em 1, por isso precisamos subtrair 1
}

// Inicializar o carrossel mostrando o primeiro slide
showSlide(currentSlideIndex);
