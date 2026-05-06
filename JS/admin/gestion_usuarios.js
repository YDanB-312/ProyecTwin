document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      const modalId = openBtn.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'flex';
      return;
    }

    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      const modalId = closeBtn.getAttribute('data-modal-close');
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
      return;
    }

    const overlay = e.target.closest('.modal-overlay');
    if (overlay && e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});
