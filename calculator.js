// Variables for holding current calculation and display
let display = document.getElementById('display');
let currentInput = '';
let operation = null;

// Append numbers and decimal point to the display
function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

// Clear the display and reset inputs
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Append operators to the calculation
function appendOperation(op) {
    currentInput += ' ' + op + ' ';
    display.value = currentInput;
}

// Perform the main calculation
function calculateResult() {
    try {
        display.value = eval(currentInput.replace('^', '**')); // Handle power operator as exponent
        currentInput = display.value;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

// Scientific functions
function calculateSine() {
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180).toFixed(4); // Degree to radian
    currentInput = display.value;
}

function calculateCosine() {
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180).toFixed(4);
    currentInput = display.value;
}

function calculateTangent() {
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180).toFixed(4);
    currentInput = display.value;
}

function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(4);
    currentInput = display.value;
}

function calculatePower() {
    currentInput += ' ^ ';
    display.value = currentInput;
}

function calculateLog() {
    display.value = Math.log10(parseFloat(display.value)).toFixed(4);
    currentInput = display.value;
}

function calculateExp() {
    display.value = Math.exp(parseFloat(display.value)).toFixed(4);
    currentInput = display.value;
}

// Keyboard event handler
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Handle numbers and decimal
    if (!isNaN(key) || key === '.') {
        appendValue(key);
    }

    // Handle basic operations
    if (['+', '-', '*', '/'].includes(key)) {
        appendOperation(key);
    }

    // Handle Enter for equals
    if (key === 'Enter') {
        calculateResult();
    }

    // Handle Escape to clear
    if (key === 'Escape') {
        clearDisplay();
    }

    // Handle Backspace for removing last character
    if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    // Handle special scientific functions with specific keys
    if (key === 's') calculateSine(); // "s" for sin
    if (key === 'c') calculateCosine(); // "c" for cos
    if (key === 't') calculateTangent(); // "t" for tan
    if (key === 'l') calculateLog(); // "l" for log
    if (key === 'e') calculateExp(); // "e" for exp
    if (key === 'r') calculateSquareRoot(); // "r" for √ (root)

    // Handle "^" for power (exponentiation)
    if (key === '^') {
        calculatePower();
    }
});
