let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(num) {
  if (num === '.' && currentInput.includes('.')) return;
  currentInput += num;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Can't divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
