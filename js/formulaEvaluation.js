const formula = document.getElementById('formula');
const answer = document.getElementById('answer');

function evaluate(input) {
  let token = [];
  let tokenType = [];
  let lastCharType = 'null';
  let charType = '';
  let char = '';
  for (let i = 0; i < input.length; i++) {
    char = input.charAt(i);
    charType = getCharType(char, input.charAt(i - 1));
    if (charType.includes('Bracket') || charType !== lastCharType || charType == 'operator') {
      token.push(char);
      tokenType.push(charType);
    } else {
      token[token.length - 1] += char;
    };
    lastCharType = charType;
  };
  let queue = [];
  let stack = [];
  let type = '';
  for (let i = 0; i < token.length; i++) {
    type = tokenType[i];
    if (type == 'number'){
      queue.push(token[i]);
    } else if (type == 'openBracket') {
      stack.push('(');
    } else if (type == 'closeBracket') {
      while (stack[stack.length - 1] != '(' && stack.length > 0) {
        queue.push(stack.pop());
      };
      stack.pop();
    } else if (type == 'operator') {
      const oo = pri(token[i]);
      while (stack.length > 0 && stack[stack.length - 1] != '(') {
        const ot = pri(stack[stack.length - 1]);
        if (ot && ((oo.join == 'L' && oo.p <= ot.p) || (oo.join == 'R' && oo.p < ot.p))) {
          queue.push(stack.pop());
        } else {
          break;
        };
      };
      stack.push(token[i]);
    };
  };
  while (stack.length > 0) {
    queue.push(stack.pop());
  };
  let calc = [];
  for (let i = 0; i < queue.length; i++) {
    calc.push(queue[i]);
    if (calc[calc.length - 1] == '+') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a + b);
    };
    if (calc[calc.length - 1] == '-') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a - b);
    };
    if (calc[calc.length - 1] == '*') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a * b);
    };
    if (calc[calc.length - 1] == '/') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a / b);
    };
    if (calc[calc.length - 1] == '^') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a ** b);
    };
    if (calc[calc.length - 1] == '%') {
      calc.pop();
      const b = Number(calc.pop());
      const a = Number(calc.pop());
      calc.push(a % b);
    };
  };
  return calc[0];
};

function getCharType(char, lastChar) {
  if ('+-*/^%'.includes(char)){
    if(!(char == '-' && '(+-*/^%'.includes(lastChar))) {return 'operator';};
  };
  if (char == '('){return 'openBracket'};
  if (char == ')'){return 'closeBracket'};
  return 'number';
};

function pri(operator) {
  const data = {
    '+': {p: 1, join: 'L'},
    '-': {p: 1, join: 'L'},
    '*': {p: 2, join: 'L'},
    '/': {p: 2, join: 'L'},
    '^': {p: 3, join: 'R'},
    '%': {p: 2, join: 'L'}
  };
  return data[operator] || {p: 0, join: 'L'};
};

formula.addEventListener('input', () => {
  answer.innerText = evaluate(formula.value);
});
