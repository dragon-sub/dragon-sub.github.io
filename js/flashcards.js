fakeButton.onclick = () => realButton.click();

let mode = 'memorize';
const memorize = document.getElementById('memorize');
const test = document.getElementById('test');
const uploadCsv = document.getElementById('uploadCsv');
let s = document.getElementById('screen');
let data = [];
memorize.onclick = () => switchMode(true);
test.onclick = () => switchMode(false);

function switchMode(bool) {
  memorize.classList.toggle('selected', bool);
  test.classList.toggle('selected', !bool);
  mode = ['memorize', 'test'][Number(!bool)];
  update();
};

uploadCsv.addEventListener('change', function(ev){
  let s = document.getElementById('screen');
  const csvPath = ev.target.files[0];
  let reader = new FileReader();
  reader.readAsText(csvPath);
  reader.onload = () => {
    const rawData = reader.result;
    const rowData = rawData.split('\n');
    rowData.forEach(row => {
      data.push(row.replaceAll('\r', '').split(','));
    });
    update();
  };
});

function update() {
  if (mode == 'memorize') {
    let cards = '';
    const partOfSpeech = {
      n: '名詞',
      v: '動詞',
      adj: '形容詞',
      a: '副詞',
      p: '前置詞',
      pro: '代名詞',
      c: '接続詞',
      auv: '助動詞',
      i: '間投詞',
      ar: '冠詞'
    };
    data.forEach(word => {
      cards += `<div class="fcsCard">
  <div class="fcsWord">${word[0]}</div>
  <div class="fcsMean">${word[1]}<br>
    <small style="margin: 0;">
      ${partOfSpeech[word[2]] ? partOfSpeech[word[2]] : word[2]}&emsp;性: ${word[4] ? word[4] : '未設定'}
    </small>
  </div>
</div>`;
    });
    s.innerHTML = cards;
  } else {
    s.innerHTML = 'test';
  };
};