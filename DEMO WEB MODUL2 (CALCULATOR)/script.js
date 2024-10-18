let result = document.getElementById('result');
let currentValue = '';

function appendNumber(number) {
  currentValue += number;
  result.value = currentValue;
}

function appendOperator(operator) {
  currentValue += operator;
  result.value = currentValue;
}

function appendDot() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
    result.value = currentValue;
  }
}

function clearResult() {
  currentValue = '';
  result.value = '0';
}

function calculate() {
  try {
    // Handle exponentiation (pangkat)
    if (currentValue.includes('^')) {
      let [base, exponent] = currentValue.split('^');
      currentValue = Math.pow(base, exponent).toString();
    } else {
      currentValue = eval(currentValue).toString();
    }
    result.value = currentValue;
  } catch (error) {
    result.value = 'Error';
  }
}
