(() => {
  const home = document.querySelector('.home-page');
  if (!home) return;

  // Reveal focused links immediately and never restart the entrance on blur.
  const finishEntrance = () => home.classList.add('entrance-complete');
  home.addEventListener('focusin', finishEntrance, { once: true });
  if (home.matches(':focus-within')) finishEntrance();
})();
