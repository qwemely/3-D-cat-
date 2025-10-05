const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = clientX - eyeX;
    const dy = clientY - eyeY;

    const angle = Math.atan2(dy, dx);
    const distance = Math.min(5, Math.hypot(dx, dy) / 20);

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    eye.style.transform = `translate(${x}px, ${y}px)`;
  });
});