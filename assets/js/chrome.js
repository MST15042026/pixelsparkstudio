document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-open-icon');
  const iconClose = document.getElementById('menu-close-icon');

  function openMenu() {
    if (!menu) return;
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (btnToggle) btnToggle.setAttribute('aria-expanded', 'true');
    if (iconOpen) iconOpen.classList.add('hidden');
    if (iconClose) iconClose.classList.remove('hidden');
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    document.body.style.overflow = '';
    if (btnToggle) btnToggle.setAttribute('aria-expanded', 'false');
    if (iconOpen) iconOpen.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
  }

  if (btnToggle && menu) {
    btnToggle.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
});
