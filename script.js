document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Show more toggle for projects
  document.querySelectorAll('.toggle').forEach(btn => {
    const targetSel = btn.getAttribute('data-target');
    const section = document.querySelector(targetSel);
    if (!section) return;
    const hidden = section.querySelectorAll('.more-item');
    let expanded = false;
    const update = () => {
      hidden.forEach(el => el.style.display = expanded ? 'grid' : 'none');
      btn.textContent = expanded ? 'Show less...' : 'Show more...';
      btn.setAttribute('aria-expanded', String(expanded));
    };
    update();
    btn.addEventListener('click', () => { expanded = !expanded; update(); });
  });

  // Simple modal system
  function openModal(id) {
    const modal = document.querySelector(id);
    if (modal) modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  document.querySelectorAll('.modal-link').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) { e.preventDefault(); openModal(href); }
    });
  });
  document.querySelectorAll('.modal [data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
  });
  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m) closeModal(m); });
  });
  if (location.hash) openModal(location.hash);
});
