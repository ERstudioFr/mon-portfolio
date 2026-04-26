document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const burger = nav.querySelector('.burger');
  const menu = nav.querySelector('ul');
  if (!burger || !menu) return;

  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('nav-open');
  }

  burger.addEventListener('click', function () {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    nav.classList.toggle('nav-open', !expanded);
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) closeMenu();
  });
});
