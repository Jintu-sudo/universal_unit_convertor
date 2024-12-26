document.addEventListener('DOMContentLoaded', (event) => {
    let display = document.getElementById('display');
    let currentInput = '';
    let caret = document.getElementById('caret');

    function updateDisplay(value) {
        display.value = value;
        currentInput = value;
        updateCaret();
        display.focus();
    }

    function appendNumber(number) {
        currentInput += number;
        updateDisplay(currentInput);
    }

    function clearDisplay() {
        currentInput = '';
        updateDisplay('');
    }

    function setOperation(op) {
        currentInput += ' ' + op + ' ';
        updateDisplay(currentInput);
    }

    function calculate() {
        try {
            let result = math.evaluate(currentInput.replace('^', '**'));
            updateDisplay(result);
            currentInput = result;
        } catch (error) {
            updateDisplay('Error');
            currentInput = '';
        }
    }

    function calculateSine() {
        try {
            let result = math.sin(math.unit(parseFloat(display.value), 'deg')).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function calculateCosine() {
        try {
            let result = math.cos(math.unit(parseFloat(display.value), 'deg')).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function calculateTangent() {
        try {
            let result = math.tan(math.unit(parseFloat(display.value), 'deg')).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function calculateSquareRoot() {
        try {
            let result = math.sqrt(parseFloat(display.value)).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function calculatePower() {
        currentInput += ' ^ ';
        updateDisplay(currentInput);
    }

    function calculateLog() {
        try {
            let result = math.log10(parseFloat(display.value)).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    function calculateExp() {
        try {
            let result = math.exp(parseFloat(display.value)).toFixed(4);
            updateDisplay(result);
        } catch (error) {
            updateDisplay('Error');
        }
    }

    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (!isNaN(key) || key === '.') {
            appendNumber(key);
        }
        if (['+', '-', '*', '/'].includes(key)) {
            setOperation(key);
        }
        if (key === 'Enter') {
            calculate();
        }
        if (key === 'Escape') {
            clearDisplay();
        }
        if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }
        if (key === 's') calculateSine();
        if (key === 'c') calculateCosine();
        if (key === 't') calculateTangent();
        if (key === 'l') calculateLog();
        if (key === 'e') calculateExp();
        if (key === 'r') calculateSquareRoot();
        if (key === '^') {
            calculatePower();
        }
    });

    function updateCaret() {
        caret.style.left = display.value.length * 10 + 'px'; // Adjust the caret position based on input length
    }

    display.addEventListener('focus', () => display.setSelectionRange(display.value.length, display.value.length));

    window.appendNumber = appendNumber;
    window.clearDisplay = clearDisplay;
    window.setOperation = setOperation;
    window.calculate = calculate;
    window.calculateSine = calculateSine;
    window.calculateCosine = calculateCosine;
    window.calculateTangent = calculateTangent;
    window.calculateSquareRoot = calculateSquareRoot;
    window.calculatePower = calculatePower;
    window.calculateLog = calculateLog;
    window.calculateExp = calculateExp;
});
