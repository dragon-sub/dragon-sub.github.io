const lastUpdated = '2026/03/19';
const page = document.querySelector('html');
const bar = document.getElementById('progressInner');
const clock = document.getElementById('clock');
const ho = document.getElementById('hour');
const mi = document.getElementById('minute');
const se = document.getElementById('second');
const realSubmit = document.getElementById('realSubmit');
const fakeSubmit = document.getElementById('fakeSubmit');
fakeSubmit.onclick = () => realSubmit.click();
const loading = document.querySelector('.loading');
const realTheme = document.getElementById('theme');
const fakeTheme = document.querySelector('.theme');
const endpoint = 'https://script.google.com/macros/s/AKfycbzCpdCKFv_kz4XUXTESFb46pJSjHHD4eRmd77ZCyub4OpitIVYp6UAay0vFls53d9jB/exec';
fakeTheme.onclick = () => realTheme.click();

function prepareContents() {
  const banner = document.querySelector('.banner');
  const headerWrapper = document.getElementById('headerWrapper');
  const items = document.querySelectorAll('.nav li')

  banner.style.opacity = 1;
  banner.style.transform = 'none';
  headerWrapper.style.backgroundColor = 'rgba(255, 255, 255, 0)';

  items.forEach((li, i) => {
    li.style.transitionDelay = `${i * 0.1 + 0.5}s`;
    li.style.opacity = 1;
    li.style.transform = 'none';
  });
  reciprocalLinks();
  history();
  updateProgress();
  updateClock();
  elements.forEach(section => fade.observe(section));
  setShowMore();
  document.querySelectorAll('.showMore').forEach(showMoreButton => {
    showMoreButton.addEventListener('click', (event) => {
      const target = event.target;
      const targetParent = target.closest('section');
      targetParent.style.maxHeight = targetParent.scrollHeight + 'px';
      targetParent.classList.remove('shorten');
      target.classList.add('delete');
    });
  });
  document.getElementById('lastUpdated').innerText = lastUpdated;
}

function reciprocalLinks() {
  const container = document.getElementById('reciprocalLinks');
  const linksData = [
    {
      name: 'やなぎさん',
      link: 'https://yana-lp.f5.si/',
      title: 'やなぎのホームページ',
      info: 'コントラストがあって見やすい'
    },
    {
      name: '風止渚さん',
      link: 'https://kzng.f5.si/',
      title: '風止渚のホームページ',
      info: '私の尊敬してる方。',
    },
    {
      name: 'zepto_0321氏',
      link: 'https://zepto-0321.github.io/zepto_page/',
      title: 'zepto_page',
      info: '私のリア友。いろんなこと知ってる'
    },
    {
      name: 'うまいだんごさん',
      link: 'https://umaii.f5.si/',
      title: 'うまいだんご',
      info: 'アプリとか作ってるすごい人。ページの一番最初から伝わるC#信者感'
    },
    {
      name: 'n0xaさん',
      link: 'https://n0xa.f5.si/',
      title: '自己紹介',
      info: 'モダンでかっこいいサイト。淡い背景がいい'
    },
    {
      name: 'ActiveTKさん',
      link: 'https://profile.activetk.jp/',
      title: 'ActiveTK. - ActiveTK.jp',
      info: 'とにかくすごい方。私の憧れ。'
    },
    {
      name: '256serverさん',
      link: 'https://256server.com/',
      title: '256server｜home',
      info: 'アクセス数と相互リンクの数が多くて羨ましい'
    },
    {
      name: '彩音さん',
      link: 'https://www.ayane0857.net/',
      title: 'メインページ | 彩音のサイト',
      info: '誇張しすぎない桃色とか洗練されたUIがおしゃれ'
    },
    {
      name: 'ただのサメさん',
      link: 'https://tadanosame.com/',
      title: 'ただのサメ | 公式サイト',
      info: 'ターコイズっぽい配色と余白が綺麗で好き。'
    },
    {
      name: 'ココリーネさん',
      link: 'https://koko2rine.com/',
      title: 'ココリーネの趣味部屋 - PCと野獣と。',
      info: 'ページが豪華で見飽きないこんな感じのサイトを作りたかった'
    },
    {
      name: 'ちくにざきさん',
      link: 'https://157.f5.si/',
      title: 'ちくにざき',
      info: '自宅鯖でやってるらしい。'
    },
    {
      name: 'ko-mathさん',
      link: 'https://ko-math.f5.si/',
      title: 'ko-math homepage',
      info: 'アテ友のサイトです。BFの実行環境とか作っててすごい'
    }
  ];
  let links = "";
  linksData.forEach(site => {
    links += `<p><c-l>${site.name}</c-l><c-r><a href="${site.link}">${site.title}<i-e /></a></c-r></p><small>${site.info}</small>`;
  });
  container.innerHTML = links;
}

function history() {
  const pageHistories = document.getElementById('pageHistories');
  const historiesData = [
    {
      month: '2025.12',
      things: [
        {date: '29', info: 'HPをリニューアル'}
      ]
    },
    {
      month: '2026.01',
      things: [
        {date: '01', info: 'Formula evaluationを公開'},
        {date: '03', info: 'Flashcardsを公開'},
        {date: '07', info: 'アイコン等追加'},
        {date: '08', info: 'プログレスバー・時計追加'},
        {date: '11', info: '計算機を強化'}
      ]
    },
    {
      month: '2026.02',
      things: [
        {date: '14', info: '長い要素の折り畳み実装'},
        {date: '14', info: 'Find the Value of Piを公開'},
        {date: '26', info: '要素アニメのグループ化'},
        {date: '27', info: 'フォームの作成'}
      ]
    },
    {
      month: '2026.03',
      things: [
        {date: '08', info: 'テーマ変更を実装'},
        {date: '15', info: 'gridを葬り軽量化'},
        {date: '19', info: 'フォントをOutfit→Interに'},
        {date: '19', info: 'Recommended Songを追加'}
      ]
    }
  ];
  let histories = '';
  let eventMonth = '';
  historiesData.forEach(thing =>{
    eventMonth = thing.month;
    histories += `<div class="st2">${eventMonth}</div>`;
    thing.things.forEach(event => {
      histories += `<p><c-l>${eventMonth + '.' + event.date}</c-l><c-r>${event.info}</c-r></p>`
    });
  });
  pageHistories.innerHTML = histories;
}

function updateProgress() {
  const point = page.scrollHeight - page.clientHeight;
  const t = page.scrollTop / point;

  bar.style.transform = `scaleX(${t})`;
  bar.title = t * 100 + '%';

  window.requestAnimationFrame(updateProgress);
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
  se.setAttribute('transform', `rotate(${second * 6} 50 50)`)
}

function setShowMore() {
  const limit = window.innerHeight;
  const showMore = document.createElement('div');
  showMore.innerHTML = 'Show More';
  showMore.className = 'showMore';
  let parts = document.querySelectorAll('section');
  parts.forEach(part => {
    if (part.scrollHeight > limit) {
      part.style.maxHeight = part.scrollHeight - 40 + 'px';
      part.appendChild(showMore.cloneNode(true));
      part.classList.add('shorten');
    }
  });
}

function setMaxHeight() {
  const limit = window.innerHeight;
  let parts = document.querySelectorAll('section');
  parts.forEach(part => {
    if (part.scrollHeight > limit) {
      part.style.maxHeight = part.scrollHeight + 'px';
    }
  });
}

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
    alert('送信しました');
    e.target.reset();
    realSubmit.disabled = 'true';
    loading.height = 0;
});

window.addEventListener('load', prepareContents);

window.setInterval(updateClock, 1000);