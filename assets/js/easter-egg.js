(() => {
  const trigger = document.querySelector('.site-easter-egg');
  const dialog = document.querySelector('#easter-egg-dialog');
  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

  trigger.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (!dialog.open) dialog.showModal();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
})();
