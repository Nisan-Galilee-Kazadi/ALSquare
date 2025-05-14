  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeBtn');
  const content = document.getElementById('mobileMenuContent');

  btn.addEventListener('click', () => {
    // Fait apparaître le panneau
    menu.classList.remove('translate-x-full');

    // Ensuite, décale le contenu intérieur
    setTimeout(() => {
      content.classList.remove('translate-x-full');
      content.classList.add('translate-x-0');
    }, 100);
  });

  closeBtn.addEventListener('click', () => {
    // D'abord : déplace le contenu intérieur vers la droite
    content.classList.remove('translate-x-0');
    content.classList.add('translate-x-full');

    // Puis : referme le panneau après l'animation du contenu
    setTimeout(() => {
      menu.classList.add('translate-x-full');
    }, 100);
  });
