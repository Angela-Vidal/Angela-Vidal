const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('open', open);
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}));

const certificatesButton = document.querySelector('#show-certs');
certificatesButton?.addEventListener('click', () => {
  const expanded = certificatesButton.getAttribute('aria-expanded') !== 'true';
  document.querySelectorAll('.extra-cert').forEach(card => { card.hidden = !expanded; });
  certificatesButton.setAttribute('aria-expanded', String(expanded));
  certificatesButton.innerHTML = expanded ? 'Mostrar menos <span aria-hidden="true">−</span>' : 'Ver todos os certificados <span aria-hidden="true">+</span>';
});

document.querySelector('#year').textContent = new Date().getFullYear();
