(() => {
  const dialog = document.querySelector('#easter-egg-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('img');
  if (!image) return;

  document.querySelectorAll('a[aria-controls="easter-egg-dialog"]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialog.dataset.instant = String(event.detail === 0);
      image.src = trigger.href;
      image.alt = trigger.dataset.photoAlt || 'A photo from Raphaël’s collection';
      dialog.setAttribute('aria-label', trigger.dataset.photoAlt ? 'Cat photo' : 'Hidden photo');
      if (!dialog.open) dialog.showModal();
    });
  });

  dialog.querySelector('.photo-dialog__close').addEventListener('click', (event) => {
    dialog.dataset.instant = String(event.detail === 0);
  });

  dialog.addEventListener('cancel', () => {
    dialog.dataset.instant = 'true';
  });

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.dataset.instant = 'false';
      dialog.close();
    }
  });
})();
