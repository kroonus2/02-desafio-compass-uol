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
