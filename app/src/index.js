let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Função para alternar o menu mobile
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    const isMenuVisible = mobileMenu.classList.contains("hidden");
    if (isMenuVisible) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  }
  console.log("clicou");
}

// Função para mostrar o slide atual
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

// Funções para avançar e retroceder slides
function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index - 1);
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
  setInterval(() => {
    nextSlide();
  }, 5000);
}

// Função para verificar o formato do email e mostrar uma confirmação
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailValue)) {
    return confirm(`Enviaremos um email de contato para: ${emailValue}`);
  } else {
    alert("Por favor, insira um email válido.");
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    return false; // Impede o envio do formulário
  }
}

// Inicializar o carrossel mostrando o primeiro slide
showSlide(currentSlideIndex);
startAutoSlide();
