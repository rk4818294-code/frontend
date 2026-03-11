// Simple Calculator logic
(function(){
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('.btn'));
  let expression = '';

  function updateDisplay(text){
    display.textContent = text === '' ? '0' : text;
  }

  function append(value){
    // prevent multiple leading zeros
    if (expression === '' && value === '0') {
      expression = '0';
      updateDisplay(expression);
      return;
    }
    // avoid two decimals in the same number
    if (value === '.') {
      const parts = expression.split(/[\+\-\×\÷\*\/]/);
      const last = parts[parts.length - 1];
      if (last.includes('.')) return;
      if (last === '') value = '0.';
    }
    expression += value;
    updateDisplay(expression);
  }

  function clearAll(){
    expression = '';
    updateDisplay('0');
  }

  function backspace(){
    expression = expression.slice(0, -1);
    updateDisplay(expression === '' ? '0' : expression);
  }

  function evaluateExpression(){
    if (expression.trim() === '') return;
    // Replace common symbols
    let expr = expression.replace(/×/g, '*').replace(/÷/g, '/');

    // convert percentage like 50% into (50/100)
    expr = expr.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

    // sanitize: allow only digits, operators, parentheses, decimal and spaces
    if (/[^0-9+\-*/().\s%]/.test(expr)) {
      updateDisplay('Error');
      expression = '';
      return;
    }

    try {
      // Use Function to evaluate expression (safer than eval but still be careful)
      const result = Function('"use strict"; return (' + expr + ')')();
      expression = String(result);
      updateDisplay(expression);
    } catch (e) {
      updateDisplay('Error');
      expression = '';
    }
  }

  // Button click handling
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.value;
      if (!v) return;
      if (v === 'C') {
        clearAll();
      } else if (v === 'DEL') {
        backspace();
      } else if (v === '=') {
        evaluateExpression();
      } else if (v === '%') {
        // if there's a number at end, convert it to percent immediately
        if (/\d$/.test(expression)) {
          expression += '%';
          evaluateExpression();
        } else {
          // otherwise append for user to use like 50% * 2
          append('%');
        }
      } else {
        append(v);
      }
    });
  });

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/^[0-9]$/).test(key)) {
      append(key);
      e.preventDefault();
    } else if (key === '.') {
      append('.');
      e.preventDefault();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      // map '*' and '/' directly, show × ÷ on display when clicked by button; we accept plain symbols in typing
      append(key);
      e.preventDefault();
    } else if (key === 'Enter' || key === '=') {
      evaluateExpression();
      e.preventDefault();
    } else if (key === 'Backspace') {
      backspace();
      e.preventDefault();
    } else if (key === 'Escape') {
      clearAll();
      e.preventDefault();
    } else if (key === '%') {
      if (/\d$/.test(expression)) {
        expression += '%';
        evaluateExpression();
      } else {
        append('%');
      }
      e.preventDefault();
    }
  });

  // initialize
  updateDisplay('0');
})();