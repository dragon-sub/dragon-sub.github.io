const lastUpdated = '2026/03/30';
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
fakeTheme.onclick = () => {
  realTheme.click();
  saveTheme("colorTheme", realTheme.checked);
}

function prepareContents() {
  const banner = document.querySelector('.banner');
  const headerWrapper = document.getElementById('headerWrapper');
  const items = document.querySelectorAll('.nav li')

  loadTheme();
  page.classList.remove('noTransition');

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
      link: 'https://yana-lp.f5.si/',
      title: 'やなぎのホームページ',
      info: 'コントラストがあって見やすい',
      favicon: 'https://yanagi-lpc.github.io/icons/favicon.ico'
    },
    {
      link: 'https://kzng.f5.si/',
      title: '風止渚のホームページ',
      info: '私の尊敬してる方。',
      banner: 'https://kzng.f5.si/Banner.png',
      favicon: 'https://kzng.f5.si/favicon.ico'
    },
    {
      link: 'https://zepto-0321.github.io/zepto_page/',
      title: 'zepto_page',
      info: '私のリア友。いろんなこと知ってる',
      favicon: 'https://zepto-0321.github.io/zepto_page/icon3.jpg'
    },
    {
      link: 'https://umaii.f5.si/',
      title: 'うまいだんご',
      info: 'アプリとか作ってるすごい人。ページの一番最初から伝わるC#信者感',
      banner: 'https://umaii.f5.si/img/banner.png',
      favicon: 'https://umaii.f5.si/img/favicon.png'
    },
    {
      link: 'https://n0xa.f5.si/',
      title: '自己紹介',
      info: 'モダンでかっこいいサイト。淡い背景とアニメーションが格好いい',
      favicon: 'https://n0xa.f5.si/favicon.ico'
    },
    {
      link: 'https://profile.activetk.jp/',
      title: 'ActiveTK. - ActiveTK.jp',
      info: 'とにかくすごい方。私の憧れ。色々なツールを公開されております',
      favicon: 'https://profile.activetk.jp/favicon.ico'
    },
    {
      link: 'https://256server.com/',
      title: '256server｜home',
      info: 'アクセス数と相互リンクの数が多くて羨ましい',
      banner: 'https://256server.com/image/banner/256server.png',
      favicon: 'https://256server.com/favicon.ico'
    },
    {
      link: 'https://www.ayane0857.net/',
      title: 'メインページ | 彩音のサイト',
      info: '誇張しすぎない桃色とか洗練されたUIがおしゃれ',
      favicon: 'https://ayane0857.net/favicon.ico'
    },
    {
      link: 'https://tadanosame.com/',
      title: 'ただのサメ | 公式サイト',
      info: 'ターコイズっぽい配色と余白が綺麗で好き。',
      favicon: 'https://www.google.com/s2/favicons?sz=64&domain=http://tadanosame.com'
    },
    {
      link: 'https://koko2rine.com/',
      title: 'ココリーネの趣味部屋 - PCと野獣と。',
      info: 'ページが豪華で見飽きないこんな感じのサイトを作りたかった',
      favicon: 'https://koko2rine.com/favicon.ico'
    },
    {
      link: 'https://157.f5.si/',
      title: 'ちくにざき',
      info: '自宅鯖でやってるらしい。自分もそういう系の知識を身に着けてみたい',
      favicon: "https://www.google.com/s2/favicons?sz=64&domain=157.f5.si",
      banner: 'https://157.f5.si/images/banners/banner-2.png'
    },
    {
      link: 'https://ko-math.f5.si/',
      title: 'ko-math homepage',
      info: 'アテ友のサイトです。BFの実行環境とか作っててすごく充実してるページです',
      favicon: 'https://ko-math.f5.si/favicon.ico'
    },
    {
      link: 'https://lpv-vql.github.io/',
      title: 'lpv_vql',
      info: '私の尊敬してる方です。Scratchもすごいので是非ご覧なさっては。',
      favicon: 'https://lpv-vql.github.io/favicon.ico'
    }
  ];
  let links = "";
  linksData.forEach(site => {
    links += `
<div class="gridInner">
  <a href="${site.link}">
    <div style="display: flex; width: 100%">
      <img src="${site.favicon}" class="linkFavicon">
      <div style="flex: 1;">${site.banner ? `<img src="${site.banner}" class="linkBanner">` : ""}</div>
    </div>
    <span>${site.title}<i-e /></span>
  </a>
  <small>${site.info}</small>
</div>
`;
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
        {date: '19', info: 'Recommended Songを追加'},
        {date: '20', info: 'ヒーローバナーをpngからwebpに変更'},
        {date: '26', info: '相互リンク用バナーを作成'},
        {date: '28', info: '一部多言語対応化'},
        {date: '30', info: 'テーマ・言語を保存するように'}
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

function saveTheme(key, data) {
  localStorage.setItem(key, data);
}

function loadTheme() {
  const theme = localStorage.getItem("colorTheme");
  const lang = localStorage.getItem("language");
  if (theme === "true") realTheme.click();
  updateLanguage(+lang);
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