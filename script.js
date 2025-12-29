window.addEventListener('load', () => {
  document.getElementById('headerWrap').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  const banner = document.querySelector('.banner');
  banner.style.opacity = 1;
  banner.style.transform = 'none';
  const items = document.querySelectorAll('.nav li');
  items.forEach((li, i) => {
    li.style.transitionDelay = `${i * 0.1 + 0.5}s`;
    li.style.opacity = 1;
    li.style.transform = 'none';
  });
  document.getElementById('accesses').innerText = document.getElementById('count').innerText + ' Accesses';
});

const elements = document.querySelectorAll('.i');
const fade = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('ss');
        fade.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0
  }
);

elements.forEach(section => fade.observe(section));