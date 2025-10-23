let words = [
  "千里の道も一歩から。",
  "失敗は成功のもと。",
  "雨降って地固まる。",
  "石の上にも三年。",
  "急がば回れ。",
  "笑う門には福来たる。",
  "習うより慣れよ。",
  "継続は力なり。",
  "一期一会。",
  "塵も積もれば山となる。",
  "明日は明日の風が吹く。",
  "七転び八起き。",
  "人間万事塞翁が馬。",
  "好きこそ物の上手なれ。",
  "猿も木から落ちる。",
  "案ずるより産むが易し。",
  "出る杭は打たれる。",
  "二兎を追う者は一兎をも得ず。",
  "笑うは百薬の長。",
  "虎穴に入らずんば虎子を得ず。",
  "花より団子。",
  "能ある鷹は爪を隠す。",
  "時は金なり。",
  "灯台下暗し。",
  "餅は餅屋。",
  "初心忘るべからず。",
  "善は急げ。",
  "早起きは三文の徳。",
  "雨にも負けず、風にも負けず。",
  "好機逸すべからず。",
  "風林火山。",
  "棚からぼたもち。",
  "馬の耳に念仏。",
  "井の中の蛙大海を知らず。",
  "七人の敵あり。"
];

function random(a, b){
  let difference = b - a;
  let amount = Math.floor(Math.random() * difference);
  return(a + amount);
};

function recite(){
  return(words[random(0,words.length)]);
};

function changeMenu(){
  let menu = document.getElementById("menu");
  if (window.innerWidth <= 768){
    menu.innerHTML = '<a href="dragon-sub.github.io">Home</a><a href="https://dragon-sub.github.io/blog/">Blog</a>';
  }{
    menu.innerHTML = '<a href="dragon-sub.github.io">Home</a><a href="https://dragon-sub.github.io/blog/">Blog</a><a onclick="togglePopup();">☰</a>';
  };
};

function togglePopup(){
  let document.getElementById("popup");
  popup.innerHTML = document.getElementById('side-bar').innerHTML;
  popup.classList.toggle('show');
};

window.addEventListener('resize', changeMenu)
changeMenu();
document.getElementById("word").innerText = "「"+ recite()+ "」";




