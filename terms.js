const tos = document.querySelector('.terms');
let termsCode = '';

function h1(id) {
  termsCode += `<div class="st" id="t${id}"></div>`;
}

function h2(id) {
  termsCode += `<div class="st2" id="t${id}"></div>`;
}

function p(id) {
  termsCode += `<div id="t${id}"></div>`;
}

function hr() {
  termsCode += '<div style="border-bottom: 1px solid #ddd;margin:10px 0;"></div>';
}

function ul(ids) {
  termsCode += "<ul>";
  ids.forEach(id => {
    termsCode += `<li id="t${id}" style="margin-left: 1rem;"></li>`;
  });
  termsCode += "</ul>";
}

function ol(ids) {
  termsCode += "<ol>";
  ids.forEach(id => {
    termsCode += `<li id="t${id}" style="margin-left: 1rem;"></li>`;
  });
  termsCode += "</ol>";
}

h1(1);
hr();
p(2);
h2(3);
p(4);
h2(5);
p(6);
p(7);
h2(8);
p(9);
ul([10, 11, 12, 13, 14]);
h2(15);
ol([16, 17, 18, 19]);
h2(20);
ol([21, 22, 23, 24]);
h2(25);
p(26);
p(27);
p(28);
h2(29);
ol([30, 31]);
h2(32);
p(33);
h2(34);
p(35);

tos.innerHTML = termsCode;