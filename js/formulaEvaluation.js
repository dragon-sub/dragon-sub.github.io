const formula = document.getElementById('formula');
const answer = document.getElementById('answer');
const arg0 = ['pi', 'e']
const arg1 = ['sqrt', 'sin', 'cos', 'tan', 'abs', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'log'];
const arg2 = ['max', 'min', 'gcd', 'lcm'];
const funs = arg0.concat(arg1, arg2);

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
    if (type == 'number') {
      queue.push(token[i]);
    } else if (type == 'function') {
      stack.push(token[i]);
    } else if (type == 'openBracket') {
      stack.push('(');
    } else if (type == 'closeBracket' || type == 'comma') {
      while (stack[stack.length - 1] != '(' && stack.length > 0) {
        queue.push(stack.pop());
      };
      if (type == 'closeBracket') stack.pop();
      if (funs.includes(stack[stack.length - 1])) queue.push(stack.pop());
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
  let lastChar = '';
  for (let i = 0; i < queue.length; i++) {
    calc.push(queue[i]);
    lastChar = calc[calc.length - 1];
    if ('+-*/^%'.includes(lastChar) || arg2.includes(lastChar)) {
      l = calc.pop();
      const b = +calc.pop();
      const a = +calc.pop();
      if (l == '+') calc.push(a + b);
      if (l == '-') calc.push(a - b);
      if (l == '*') calc.push(a * b);
      if (l == '/') calc.push(a / b);
      if (l == '^') calc.push(a ** b);
      if (l == '%') calc.push(a % b);
      if (l == 'max') calc.push(Math.max(a, b));
      if (l == 'min') calc.push(Math.min(a, b));
      if (l == 'gcd') calc.push(gcd(a, b));
      if (l == 'lcm') calc.push(a * b / gcd(a, b));      
    };
    if (arg1.includes(lastChar)) {
      l = calc.pop();
      const a = +calc.pop();
      if (l == 'sqrt') calc.push(Math.sqrt(a));
      if (l == 'sin') calc.push(Math.sin(a));
      if (l == 'cos') calc.push(Math.cos(a));
      if (l == 'tan') calc.push(Math.tan(a));
      if (l == 'abs') calc.push(Math.abs(a));
      if (l == 'asin') calc.push(Math.asin(a));
      if (l == 'acos') calc.push(Math.acos(a));
      if (l == 'atan') calc.push(Math.atan(a));
      if (l == 'sinh') calc.push(Math.sinh(a));
      if (l == 'cosh') calc.push(Math.cosh(a));
      if (l == 'tanh') calc.push(Math.tanh(a));
      if (l == 'log') calc.push(Math.log(a));
    };
    if (arg0.includes(lastChar)) {
      l = calc.pop();
      if (l == 'e') calc.push(Math.E);
      if (l == 'pi') calc.push(Math.PI);
    };
  };
  return calc[0];
};

function getCharType(char, lastChar) {
  if ('+-*/^%'.includes(char)){
    if(!(char == '-' && '(+-*/^%'.includes(lastChar))) return 'operator';
  };
  if (char == '(') return 'openBracket';
  if (char == ')') return 'closeBracket';
  if (char == ',') return 'comma';
  if (/[A-Za-z]/.test(char)) return 'function';
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
  answer.innerText = evaluate(formula.value.replaceAll(' ', ''));
});


function gcd(a1, a2) {
  let a = a1;
  let b = a2;
  let r = 1;
  while (! r == 0) {
    r = a % b;
    a = b;
    if (! r == 0) {
      b = r;
    };
  };
  return b;
};