const japanese = document.getElementById('japanese');
const english = document.getElementById('english');
const french = document.getElementById('french');
const toggle = document.getElementById('languageSwitch');

japanese.onclick = () => {updateLanguage(0)};
english.onclick = () => {updateLanguage(1)};
french.onclick = () => {updateLanguage(2)};

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
  link_link: ['Links', 'Links', 'Liens'],

  link_0001: [
    'コントラストがあって見やすい',
    'High contrast for better visibility',
    'Contraste élevé pour une meilleure lisibilité'
  ],
  link_0002: [
    '私の尊敬してる方。',
    'People I respect.',
    'Personnes que je respecte.'
  ],
  link_0003: [
    '私のリア友。いろんなこと知ってる',
    'My real-life friend. Knows a lot about everything.',
    'Mon ami dans la vraie vie. Sait énormément de choses.'
  ],
  link_0004: [
    'アプリとか作ってるすごい人。ページの一番最初から伝わるC#信者感',
    'A talented developer who creates apps. You can feel their C# devotion from the very top of the page.',
    'Un développeur talentueux qui crée des applis. On ressent sa dévotion pour le C# dès le début de sa page.'
  ],
  link_0005: [
    'モダンでかっこいいサイト。淡い背景とアニメーションが格好いい',
    'A cool, modern site. Love the subtle background and sleek animations.',
    'Un site moderne et stylé. Le fond pastel et les animations sont superbes.'
  ],
  link_0006: [
    'とにかくすごい方。私の憧れ。色々なツールを公開されております',
    'An amazing person I truly admire. They have released various tools.',
    'Une personne incroyable que j’admire énormément. Il a publié divers outils.'
  ],
  link_0007: [
    'アクセス数と相互リンクの数が多くて羨ましい',
    'I envy their high traffic and numerous reciprocal links.',
    'J’envie leur nombre de visites et de liens réciproques.'
  ],
  link_0008: [
    '誇張しすぎない桃色とか洗練されたUIがおしゃれ',
    'Chic, sophisticated UI with subtle, tasteful pink accents.',
    'Une UI raffinée et élégante avec des touches de rose subtiles.'
  ],
  link_0009: [
    'ターコイズっぽい配色と余白が綺麗で好き。',
    'I love the turquoise palette and the beautiful use of whitespace.',
    'J’adore la palette turquoise et la belle utilisation de l’espace blanc.'
  ],
  link_0010: [
    'ページが豪華で見飽きないこんな感じのサイトを作りたかった',
    'A stunning page I never tire of. This is the kind of site I’ve always wanted to create.',
    'Une page magnifique dont on ne se lasse pas. C’est le genre de site que j’ai toujours voulu créer.'
  ],
  link_0011: [
    '自宅鯖でやってるらしい。自分もそういう系の知識を身に着けてみたい',
    'Running on a home server. I’d love to learn more about that kind of tech myself.',
    'Il paraît que c’est sur un serveur domestique. J’aimerais bien acquérir ce genre de connaissances.'
  ],
  link_0012: [
    'アテ友のサイトです。BFの実行環境とか作っててすごく充実してるページです',
    'A site by an "Atte-tomo" (Atten friend). They even built a Brainfuck runtime—it’s a very impressive page.',
    'Le site d’un « Atte-tomo » (ami d’Atten). Il a créé un environnement d’exécution pour Brainfuck, c’est une page très complète.'
  ],
  link_0013: [
    '私の尊敬してる方です。Scratchもすごいので是非ご覧なさっては。',
    'Someone I truly admire. Their Scratch projects are amazing, so please check them out.',
    'Quelqu’un que j’admire vraiment. Ses projets Scratch sont incroyables, n’hésitez pas à y jeter un œil.'
  ],
  link_0014: [
    '音楽制作をされているそうです。私はいつも聞くだけなので見習いたいです',
    "I hear he's involved in music production. I'm always just a listener, so I'd like to learn from him.",
    "J'ai entendu dire qu'il travaillait dans la production musicale. Je me contente généralement d'écouter, alors j'aimerais bien apprendre de lui."
  ],
  link_0015: [
    "素朴で風情ある街並みの写真が印象的。音楽活動もされております。",
    "Evocative photos of simple, atmospheric streetscapes. They are also engaged in musical activities.",
    "Des photos de rues simples et pleines de charme sont particulièrement marquantes. Cette personne fait également de la musique."
  ],
  link_0016: [
    "ピクセルフォントとサイトの雰囲気がマッチしてすごくいい",
    "The pixel font matches the vibe of the site really well and looks great.",
    "La police pixel correspond très bien à l’ambiance du site et rend vraiment bien."
  ],
  link_0017: [
    "レイアウトが整然としていて綺麗。英語も対応しているみたい",
    "The layout is clean and well-organized. It also seems to support English.",
    "La mise en page est propre et bien structurée. Il semble aussi y avoir une version anglaise."
  ],
  link_0018: [
    "様々な言語を書かれている私の尊敬する方です。羨望の目を向けてばかりではいけませんが。",
    "This is someone I deeply respect who writes in many different languages. Though I know I shouldn’t just look at them with envy.",
    "C’est une personne que je respecte profondément et qui écrit dans de nombreuses langues. Même si je sais que je ne devrais pas me contenter de l’envier."
  ],

  hist_0001: [
    'HPをリニューアル',
    'Website renewed',
    'Site web renouvelé'
  ],
  hist_0002: [
    'Formula evaluationを公開',
    'Released "Formula evaluation"',
    'Publication de « Formula evaluation »'
  ],
  hist_0003: [
    'Flashcardsを公開',
    'Released "Flashcards"',
    'Publication de « Flashcards »'
  ],
  hist_0004: [
    'アイコン等追加',
    'Added icons and more',
    'Ajout d’icônes et plus'
  ],
  hist_0005: [
    'プログレスバー・時計追加',
    'Added progress bar and clock',
    'Ajout d’une barre de progression et d’une horloge'
  ],
  hist_0006: [
    '計算機を強化',
    'Enhanced the calculator',
    'Amélioration de la calculatrice'
  ],
  hist_0007: [
    '長い要素の折り畳み実装',
    'Implemented folding for long elements',
    'Mise en œuvre du repliage pour les éléments longs'
  ],
  hist_0008: [
    'Find the Value of Piを公開',
    'Released "Find the Value of Pi"',
    'Publication de « Find the Value of Pi »'
  ],
  hist_0009: [
    '要素アニメのグループ化',
    'Grouped element animations',
    'Groupement des animations d’éléments'
  ],
  hist_0010: [
    'フォームの作成',
    'Created a form',
    'Création d’un formulaire'
  ],
  hist_0011: [
    'テーマ変更を実装',
    'Implemented theme switching',
    'Mise en œuvre du changement de thème'
  ],
  hist_0012: [
    'gridを葬り軽量化',
    'Discarded background grids for optimization',
    'Suppression de la grille de fond pour l’optimisation'
  ],
  hist_0013: [
    'フォントをOutfit→Interに',
    'Changed font from Outfit to Inter',
    'Passage de la police Outfit à Inter'
  ],
  hist_0014: [
    'Recommended Songを追加',
    'Added Recommended Song',
    'Ajout de la section « Chanson recommandée »'
  ],
  hist_0015: [
    'ヒーローバナーをpngからwebpに変更',
    'Changed hero banner from PNG to WebP',
    'Passage de la bannière héro du format PNG au WebP'
  ],
  hist_0016: [
    '相互リンク用バナーを作成',
    'Created a banner for mutual links',
    'Création d’une bannière pour les liens mutuels'
  ],
  hist_0017: [
    '一部多言語対応化',
    'Partial multilingual support',
    'Support multilingue partiel'
  ],
  hist_0018: [
    'テーマ・言語を保存するように',
    'Saving theme and language settings',
    'Enregistrement du thème et de la langue'
  ],

  cont_desc: [
    'Apps ScriptとGoogle Spreadsheetを用いたフォームです。未読メッセージが100件を超えている場合、データの受け取りは拒否されます。バグ報告や相互リンク申請など気軽にどうぞ。',
    'This form uses Apps Script and Google Sheets. Submissions will be rejected if there are over 100 unread messages. Feel free to send bug reports, mutual link requests, or any other messages.',
    'Ce formulaire utilise Apps Script et Google Sheets. Les envois seront refusés s’il y a plus de 100 messages non lus. N’hésitez pas à envoyer des rapports de bugs, des demandes de liens mutuels ou d’autres messages.'
  ],
  cont_name: ['Name', 'Name', 'Nom'],
  cont_mail: ['Email Address', 'Email Address', 'Adresse e-mail'],
  fakeSubmit: ['Submit', 'Submit', 'Envoyer'],

  foot_0001: [
    'Images: Photo by zyutazyudasu (CC BY-SA 2.0)',
    'Images: Photo by zyutazyudasu (CC BY-SA 2.0)',
    'Images : Photo par zyutazyudasu (CC BY-SA 2.0)'
  ],
  foot_0002: [
    'Fonts: Inter, Noto Sans JP',
    'Fonts: Inter, Noto Sans JP',
    'Polices : Inter, Noto Sans JP'
  ],
  foot_0003: [
    'Icons: ',
    'Icons: ',
    'Icônes : '
  ],
  foot_0004: [
    'External link',
    'External link',
    'Lien externe'
  ],
  foot_0005: [
    ' icon by ',
    ' icon by ',
    ' icône par '
  ],
  foot_0006: [
    'Last updated: ',
    'Last updated: ',
    'Dernière mise à jour : '
  ],
  foot_ga4: [
    'このサイトはページの改善のためGoogle Analytics 4を用いてユーザーのイベントを解析しています。',
    "This site uses Google Analytics 4 to analyze user events in order to improve its pages.",
    "Ce site utilise Google Analytics 4 pour analyser les événements des utilisateurs afin d'améliorer ses pages."
  ]
};
let textElements = [];
const textKeys = Object.keys(translatedText);

function getText() {
  textKeys.forEach(key => {
    textElements.push(document.getElementById(key));
  });
}

function updateLanguage(lang) {
  toggle.className = "languageSwitch " + ["japanese", "english", "french"][lang];
  saveTheme('language', lang);
  textElements.forEach((element, i) => {
    element.innerText = translatedText[textKeys[i]][lang];
  });
  setMaxHeight();
}