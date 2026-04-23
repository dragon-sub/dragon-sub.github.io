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
  link_0019: [
    "ページを開いた直後の文字のストロークのアニメーションがかっこいい",
    "The animation of the text strokes right after opening the page is cool.",
    "L'animation des traits de texte juste après l'ouverture de la page est sympa."
  ],
  link_0020: [
    "カーソルを作るっていう革新的なUIがすごい。ページ遷移の時のフェードも含めて。",
    "The innovative UI of creating a cursor is amazing, including the fade-in effect during page transitions.",
    "L'interface utilisateur innovante pour la création d'un curseur est remarquable, notamment l'effet de fondu lors des transitions de page."
  ],
  link_0021: [
    "要素のゆらゆらが可愛い。ページをスクロールするにつれて暗くなる作りこみもまた。",
    "The way the elements sway is adorable. I also like the way the page darkens as you scroll.",
    "Le mouvement des éléments est adorable. J'aime aussi la façon dont la page s'assombrit lorsqu'on la fait défiler."
  ],
  link_0022: [
    "HTML4.01で書かれているそうです。数学のこととか到底理解に及ばない",
    "It seems to be written in HTML 4.01. I have absolutely no understanding of the mathematics involved.",
    "Il semble que ce soit écrit en HTML 4.01. Je ne comprends absolument rien aux mathématiques sous-jacentes."
  ],
  link_0023: [
    "配色が落ち着いててバナーが可愛い！",
    "The color scheme is calming and the banner is cute!",
    "Les couleurs sont apaisantes et la bannière est mignonne !"
  ],
  link_0024: [
    "大会記録とか資格とかいっぱい持ってるすごい人のすごいサイト。",
    "This is an amazing website run by an incredible person who holds tons of competition records and qualifications.",
    "Il s'agit d'un site web exceptionnel, géré par une personne incroyable qui détient un nombre impressionnant de records et de qualifications en compétition."
  ],
  link_0025: [
    "見た目も内容も面白い。ブログもあるみたい",
    "It looks interesting and has interesting content. It seems they also have a blog.",
    "Ça a l'air intéressant et le contenu est captivant. Il semblerait qu'ils aient aussi un blog."
  ],
  link_0026: [
    "すっきりしていてテーマ切り替えもできる。ブログもサイトの進歩が感じられて面白い",
    "It's clean and allows for theme switching. The blog is also interesting, showing the site's progress.",
    "Il est épuré et permet de changer de thème. Le blog est également intéressant, car il présente l'évolution du site."
  ],
  link_0027: [
    "色々なサービスを展開されてる。このサイトのアクセスカウンターもこの方のものを使わさせていただいてます",
    "They offer a variety of services. I'm even using their access counter for this website.",
    "Ils proposent divers services. J'utilise même leur compteur d'accès pour ce site web."
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
  hist_0019: [
    `利用規約を追加`,
    `Add Terms of Use`,
    `Ajouter des conditions d'utilisation`
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
  foot_term: [
    "Terms of Service",
    "Terms of Service",
    "Conditions d’utilisation"
  ],

  t1: ["利用規約", "Terms of Services", "Conditions d’utilisation"],
  t2: [
    `本利用規約（以下、「本規約」）は、本ウェブサイト（以下、「当サイト」）の利用条件を定めるものです。利用者は、本規約に同意の上で当サイトを利用するものとします。`,
    `These Terms of Use (hereinafter, "these Terms") govern the terms and conditions for using this website (hereinafter, "this Site"). Users must agree to these Terms before using this Site.`,
    `Les présentes Conditions d'utilisation (ci-après dénommées « les présentes Conditions ») régissent les modalités d'utilisation du présent site web (ci-après dénommé « le Site »). L'utilisateur doit accepter les présentes Conditions avant d'utiliser le Site.`
  ],
  t3: [
    `第1条（適用の範囲）`,
    `Article 1 (Scope of Application)`,
    `Article 1 (Champ d'application)`
  ],
  t4: [
    `本規約は、当サイトが提供するすべての機能およびサービスに適用されます。`,
    `These Terms and Conditions apply to all features and services provided by this website.`,
    `Les présentes conditions générales s'appliquent à toutes les fonctionnalités et tous les services fournis par ce site Web.`
  ],
  t5: [
    `第2条（提供サービス）`,
    `Article 2 (Services Provided)`,
    `Article 2 (Services fournis)`
  ],
  t6: [
    `当サイトは、運営者が個人的に運営するウェブサイトであり、各種コンテンツおよび機能を提供しています。`,
    `This website is a personal website operated by the site administrator and provides various content and functions.`,
    `Ce site web est un site personnel géré par l'administrateur du site et propose divers contenus et fonctionnalités.`
  ],
  t7: [
    `提供される内容および機能は、予告なく追加、変更、または停止される場合があります。`,
    `The content and features provided may be added, changed, or discontinued without prior notice.`,
    `Le contenu et les fonctionnalités proposés peuvent être ajoutés, modifiés ou supprimés sans préavis.`
  ],
  t8: [
    `第3条（禁止事項）`,
    `Article 3 (Prohibited matters)`,
    `Article 3 (Questions interdites)`
  ],
  t9: [
    `利用者は、以下の行為を行ってはなりません。`,
    `Users must not engage in the following actions:`,
    `Les utilisateurs ne doivent pas se livrer aux actions suivantes :`
  ],
  t10: [
    `法令または公序良俗に反する行為`,
    `Acts that violate laws or public order and morals`,
    `Actes qui violent les lois ou l'ordre public et les bonnes mœurs`
  ],
  t11: [
    `当サイトの運営を妨害する行為`,
    `Actions that interfere with the operation of this site`,
    `Actions qui entravent le fonctionnement de ce site`
  ],
  t12: [
    `不正アクセスやそれを試みる行為`,
    `Unauthorized access or attempts to do so`,
    `Accès non autorisé ou tentatives d'accès non autorisé`
  ],
  t13: [
    `問い合わせフォームの悪用（スパム等）`,
    `Misuse of contact forms (spam, etc.)`,
    `Utilisation abusive des formulaires de contact (spam, etc.)`
  ],
  t14: [
    `他者に不利益を与える行為`,
    `Actions that cause harm to others`,
    `Des actes qui causent du tort aux autres`
  ],
  t15: [
    `第4条（免責事項）`,
    `Article 4 (Disclaimer)`,
    `Article 4 (Avertissement)`
  ],
  t16: [
    `当サイトの機能や情報について、その正確性・完全性を保証するものではありません。`,
    `We do not guarantee the accuracy or completeness of the functions or information on this website.`,
    `Nous ne garantissons pas l'exactitude ni l'exhaustivité des fonctions ou des informations présentes sur ce site web.`
  ],
  t17: [
    `計算結果や表示内容は参考として提供されるものであり、正確性は保証されません。`,
    `The calculation results and displayed information are provided for reference only, and their accuracy is not guaranteed.`,
    `Les résultats des calculs et les informations affichées sont fournis à titre indicatif uniquement, et leur exactitude n'est pas garantie.`
  ],
  t18: [
    `当サイトの利用により生じた損害について、運営者は責任を負いません。`,
    `The operators of this site are not responsible for any damages incurred as a result of using this site.`,
    `Les exploitants de ce site ne sont pas responsables des dommages pouvant résulter de l'utilisation de ce site.`
  ],
  t19: [
    `外部サイト（相互リンク先等）の内容について、当サイトは責任を負いません。`,
    `This site is not responsible for the content of external websites (including those linked to through reciprocal links).`,
    `Ce site n'est pas responsable du contenu des sites web externes (y compris ceux accessibles par des liens réciproques).`
  ],
  t20: [
    `第5条（著作権・ライセンス）`,
    `Article 5 (Copyright and License)`,
    `Article 5 (Droit d'auteur et licence)`
  ],
  t21: [
    `当サイトのコンテンツ（プログラム、文章、デザイン等）は、特に明記がない限り、CC0のもとで提供されています。`,
    `The content on this site (programs, text, design, etc.) is provided under CC0 unless otherwise specified.`,
    `Le contenu de ce site (programmes, textes, conception, etc.) est fourni sous licence CC0, sauf indication contraire.`
  ],
  t22: [
    `利用者は当サイトのコンテンツを自由に利用、改変、再配布、商用利用することができます。`,
    `Users are free to use, modify, redistribute, and commercially use the content on this site.`,
    `Les utilisateurs sont libres d'utiliser, de modifier, de redistribuer et d'exploiter commercialement le contenu de ce site.`
  ],
  t23: [
    `クレジット表記は不要ですが、任意で記載していただけると幸いです。`,
    `Credit attribution is not required, but we would appreciate it if you could include it if you wish.`,
    `L’attribution de la source n’est pas obligatoire, mais nous vous serions reconnaissants de l’inclure si vous le souhaitez.`
  ],
  t24: [
    `画像・バナー・相互リンク先コンテンツなど、第三者に権利があるものについては、この限りではありません。`,
    `This does not apply to images, banners, reciprocal link content, or other materials whose rights are held by third parties.`,
    `Ceci ne s'applique pas aux images, bannières, contenus de liens réciproques ou autres éléments dont les droits sont détenus par des tiers.`
  ],
  t25: [
    `第6条（アクセス解析）`,
    `Article 6 (Access Analysis)`,
    `Article 6 (Analyse de l'accès)`
  ],
  t26: [
    `当サイトでは、アクセス解析のためにGoogle Analytics 4（GA4）を利用しています。`,
    `This website uses Google Analytics 4 (GA4) for access analysis.`,
    `Ce site web utilise Google Analytics 4 (GA4) pour l'analyse des accès.`
  ],
  t27: [
    `このサービスは、トラフィックデータの収集のためにCookie等を使用する場合があります。`,
    `This service may use cookies and similar technologies to collect traffic data.`,
    `Ce service peut utiliser des cookies et des technologies similaires pour collecter des données de trafic.`
  ],
  t28: [
    `収集されるデータは匿名であり、個人を特定するものではありません。`,
    `The data collected is anonymous and does not identify individuals.`,
    `Les données recueillies sont anonymes et ne permettent pas d'identifier les individus.`
  ],
  t29: [
    `第7条（相互リンク）`,
    `Article 7 (Mutual Linking)`,
    `Article 7 (Liaison mutuelle)`
  ],
  t30: [
    `相互リンク先の内容について、当サイトは責任を負いません。`,
    `This site is not responsible for the content of the linked websites.`,
    `Ce site n'est pas responsable du contenu des sites web externes.`
  ],
  t31: [
    `相互リンクは運営者の判断により掲載・削除される場合があります。`,
    `Mutual links may be added or removed at the discretion of the website administrator.`,
    `Les liens réciproques peuvent être ajoutés ou supprimés à la discrétion de l'administrateur du site web.`
  ],
  t32: [
    `第8条（問い合わせ）`,
    `Article 8 (Inquiries)`,
    `Article 8 (Enquêtes)`
  ],
  t33: [
    `問い合わせフォームから送信された内容は、対応目的の範囲内でのみ利用します。`,
    `The information submitted through the inquiry form will only be used for the purpose of responding to your inquiry.`,
    `Les informations soumises via le formulaire de demande seront utilisées uniquement dans le but de répondre à votre demande.`
  ],
  t34: [
    `第9条（規約の変更）`,
    `Article 9 (Amendment of the Regulations)`,
    `Article 9 (Modification du Règlement)`
  ],
  t35: [
    `本規約は、予告なく変更される場合があります。変更後は掲載時点から効力を持ちます。`,
    `These terms and conditions may be changed without prior notice. The revised terms will take effect from the time they are published.`,
    `Les présentes conditions générales peuvent être modifiées sans préavis. Les conditions générales modifiées entreront en vigueur dès leur publication.`
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