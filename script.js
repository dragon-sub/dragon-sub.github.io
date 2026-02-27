const page = document.getElementById('page');
const bar = document.getElementById('progressInner');
const ho = document.getElementById('hour');
const mi = document.getElementById('minute');
const se = document.getElementById('second');
const clock = document.getElementById('clock');

window.addEventListener('load', () => {
  updateClock();
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
});

function progress() {
  const point = page.scrollHeight - page.clientHeight - 2;
  const t = page.scrollTop / point * 100;
  bar.style.width = t + '%';
  bar.title = t + '%';
}

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
    threshold: 0.1
  }
);

function updateClock() {
  const d = new Date();
  const hour = d.getHours() % 12;
  const minute = d.getMinutes();
  const second = d.getSeconds();
  ho.setAttribute('transform', `rotate(${(hour * 30) + (minute / 2) + (second / 120)} 50 50)`);
  mi.setAttribute('transform', `rotate(${(minute * 6) + (second / 10)} 50 50)`);
  se.setAttribute('transform', `rotate(${second * 6} 50 50)`);
}

function setShowMore() {
  const limit = window.innerHeight;
  const showMore = document.createElement('div');
  showMore.innerHTML = 'Show More';
  showMore.className = 'showMore';
  parts = document.querySelectorAll('section');
  parts.forEach(part => {
    if (part.scrollHeight > limit) {
      part.style.maxHeight = part.scrollHeight - 40 + 'px';
      part.appendChild(showMore.cloneNode(true));
      part.classList.add('shorten');
    }
  });
}

setInterval(updateClock, 1000);
progress();
window.addEventListener('scroll', progress);
elements.forEach(section => fade.observe(section));
const realButton = document.getElementById('uploadCsv');
const fakeButton = document.getElementById('fakeButton');
const realSubmit = document.getElementById('realSubmit');
const fakeSubmit = document.getElementById('fakeSubmit');
const loading = document.querySelector('.loading');
fakeSubmit.onclick = () => realSubmit.click();
setShowMore();

document.querySelectorAll('.showMore').forEach(showMoreButton => {
  showMoreButton.addEventListener('click', (event) => {
    const target = event.target;
    const targetParent = target.closest('section');
    targetParent.classList.remove('shorten');
    target.classList.add('delete');
  });
});

const endpoint = "https://script.google.com/macros/s/AKfycbzCpdCKFv_kz4XUXTESFb46pJSjHHD4eRmd77ZCyub4OpitIVYp6UAay0vFls53d9jB/exec";

document.getElementById("form")
  .addEventListener("submit", async (e) => {
    loading.height = 60;
    realSubmit.disabled = 'true';
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data)
    })
    alert("送信しました");
    e.target.reset();
    realSubmit.disabled = 'true';
    loading.height = 0;
});