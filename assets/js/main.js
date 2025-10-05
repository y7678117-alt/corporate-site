const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('global-nav');

btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('is-open');
});

// 可能なら、ナビ内リンククリックで閉じる
nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  });
});
