const japanese = document.getElementById('japanese');
const english = document.getElementById('english');
const french = document.getElementById('french');
const toggle = document.getElementById('languageSwitch');

japanese.onclick = () => {updateLanguage(0)};
english.onclick = () => {toggle.className = "languageSwitch english"; updateLanguage(1)};
french.onclick = () => {toggle.className = "languageSwitch french"; updateLanguage(2)};

const translatedText = {
  meta_titl: ["Jüw's Page", "Jüw's Page", 'Page de Jüw'],

  head_titl: ["Jüw's Page", "Jüw's Page", 'Page de Jüw'],
  head_acce: [" Accesses", " Accesses", ' Visites'],

  nav_top: ["Jüw's Page", "Jüw's Page", 'Page de Jüw'],
  nav_prof: ['Profile', 'Profile', 'Profil'],
  nav_workOn: ['Working on', 'Working on', 'En cours'],
  nav_work: ['Works', 'Works', 'Réalisations'],
  nav_link: ['Links', 'Links', 'Liens'],
  nav_hist: ['History', 'History', 'Historique'],
  nav_cont: ['Contact', 'Contact', 'Contact'],

  prof_titl: ['Profile', 'Profile', 'Profil'],
  prof_0001: [
    '皆さんはじめまして、ゆーです。',
    "Nice to meet you all, I'm Jüw.",
    "Ravi de vous rencontrer, je suis Jüw."
  ],
  prof_self: ['Self Introduction', 'Self Introduction', 'Présentation personnelle'],
  prof_0002: [
    'プログラミング・言語学・音声学・ルービックキューブに興味がある椎名林檎・東京事変オタクです。今は日本語・中国語・英語・フランス語・スペイン語を学んでいます。',
    "I'm a Sheena Ringo and Tokyo Jihen geek interested in programming, linguistics, phonetics, and Rubik's Cubes. Currently, I'm studying Japanese, Chinese, English, French, and Spanish.",
    "Je suis un passionné de Sheena Ringo et Tokyo Jihen, intéressé par la programmation, la linguistique, la phonétique et le Rubik's Cube. J'étudie actuellement le japonais, le chinois, l'anglais, le français et l'espagnol."
  ],
  prof_reco: ['Recommended Song', 'Recommended Song', 'Chanson recommandée'],
  changeSong: ['Change Song', 'Change Song', 'Changer la chanson'],
  prof_0003: [
    'これはJavaScriptでランダム更新されます。',
    'This is randomly updated via JavaScript.',
    'Ceci est mis à jour aléatoirement via JavaScript.'
  ],

  workOn_titl: ['Working on', 'Working on', 'En cours'],
  workOn_0001: [
    '人工言語「@ski」の開発',
    'Development of the constructed language "@ski"',
    'Développement de la langue construite « @ski »'
  ],
  workOn_0002: [
    '日, 中, 英, 仏, 西の勉強',
    'Studying JA, ZH, EN, FR, ES',
    'Étude du JA, ZH, EN, FR, ES'
  ],

  work_titl: ['Works', 'Works', 'Réalisations'],
  work_0001: [
    'JSの練習のために外部ライブラリを使わずに作った作品集です。',
    'A collection of works created without external libraries to practice JavaScript.',
    'Une collection de réalisations créées sans bibliothèques externes pour pratiquer JavaScript.'
  ],
  work_form: [
    'Formula evaluation',
    'Formula evaluation',
    'Évaluation de la formule'
  ],
  work_flas: ['Flashcards', 'Flashcards', 'Cartes de mémorisation'],
  memorize: ['Memorize', 'Memorize', 'Mémoriser'],
  fakeButton: ['Upload .csv', 'Upload .csv', 'Téléchargement de .csv'],
  work_down: ['Download .csv', 'Download .csv', 'Téléchargement de .csv'],
  work_find: [
    'Find the Value of Pi',
    'Find the Value of Pi',
    'Trouver la valeur de Pi'
  ],
  startMonteCarlo: ['Start', 'Start', 'Commencer'],
  stopMonteCarlo: ['Stop', 'Stop', 'Arrêt'],

  link_titl: ['Links', 'Links', 'Liens'],
  link_myli: ['My Links', 'My Links', 'Mes liens'],
  link_reci: ['Reciprocal Links', 'Reciprocal Links', 'Liens réciproques'],
  link_myba: ['My banner (51.3KB)', 'My banner (51.3KB)', 'Ma bannière (51.3 Ko)'],
  link_welc: [
    '絶賛募集中です。',
    'Now actively seeking. Click ',
    'Actuellement en recherche active. Cliquez '
  ],
  link_here: [
    'ここ',
    'here',
    'ici'
  ],
  link_dozo: [
    'からどうぞ。',
    '.',
    '.'
  ],
  link_link: ['Links', 'Links', 'Liens']
};
let textElements = [];
const textKeys = Object.keys(translatedText);

function getText() {
  textKeys.forEach(key => {
    textElements.push(document.getElementById(key));
  });
}

function updateLanguage(lang) {
  saveTheme('language', lang);
  textElements.forEach((element, i) => {
    element.innerText = translatedText[textKeys[i]][lang];
  });
  toggle.className = "languageSwitch " + ["japanese", "english", "french"][lang];
}

getText();