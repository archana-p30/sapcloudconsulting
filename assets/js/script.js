// Shared progressive enhancements: accessible navigation and client-side inquiry acknowledgement.
const premiumStyles = document.createElement('link');
premiumStyles.rel = 'stylesheet';
premiumStyles.href = 'assets/css/premium.css';
document.head.appendChild(premiumStyles);
const heroStyles = document.createElement('link');
heroStyles.rel = 'stylesheet';
heroStyles.href = 'assets/css/hero-visual.css';
document.head.appendChild(heroStyles);
const brainByteStyles = document.createElement('link');
brainByteStyles.rel = 'stylesheet';
brainByteStyles.href = 'assets/css/brainbyte.css';
document.head.appendChild(brainByteStyles);
const logoFitStyles = document.createElement('link');
logoFitStyles.rel = 'stylesheet';
logoFitStyles.href = 'assets/css/logo-fit.css';
document.head.appendChild(logoFitStyles);
const premiumEnhancements = document.createElement('script');
premiumEnhancements.src = 'assets/js/premium.js';
document.head.appendChild(premiumEnhancements);
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');
  const main = document.querySelector('main');
  const header = document.querySelector('.site-header');
  if (main && header) {
    main.id = 'main-content';
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, header);
  }
  document.querySelector('.nav')?.setAttribute('aria-label', 'Primary navigation');
  document.querySelector('.nav-links a.active')?.setAttribute('aria-current', 'page');
  const whatsapp = document.createElement('a');
  whatsapp.className = 'whatsapp-float';
  whatsapp.href = 'https://wa.me/918123306264?text=' + encodeURIComponent("Hi, I'm interested in SAP Consulting. Please contact me.");
  whatsapp.target = '_blank';
  whatsapp.rel = 'noopener noreferrer';
  whatsapp.setAttribute('aria-label', 'Chat with BrainByte Consulting on WhatsApp');
  whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>';
  document.body.appendChild(whatsapp);
  if (toggle && menu) {
    toggle.type = 'button';
    const closeMenu = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>'; };
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  }
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const notice = document.querySelector('.notice');
    if (notice) { notice.setAttribute('tabindex', '-1'); notice.style.display = 'block'; notice.focus(); }
    form.reset();
  });
});
