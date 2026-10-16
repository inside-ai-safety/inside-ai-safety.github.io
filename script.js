const lenses = {
  evaluate: ['Evaluation asks where apparently safe behavior breaks down.', 'Find the hidden risk', '#364ac2'],
  align: ['Alignment asks how internal feedback can shape safer learning.', 'Shape the representation', '#84613d'],
  steer: ['Steering asks when to intervene—and when to let the model continue.', 'Guide the next action', '#287263']
};
document.querySelectorAll('[data-lens]').forEach(button => {
  button.addEventListener('click', () => {
    const [description, label, color] = lenses[button.dataset.lens];
    document.querySelectorAll('[data-lens]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('lens-description').textContent = description;
    document.getElementById('visual-label').textContent = label;
    document.querySelector('.signal-path').style.stroke = color;
    document.querySelector('.signal-node circle:last-child').style.fill = color;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
