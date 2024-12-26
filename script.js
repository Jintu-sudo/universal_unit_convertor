const units = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    },
    volume: {
        liter: 1,
        milliliter: 0.001,
        cubic_meter: 1000,
        gallon: 3.78541,
        quart: 0.946353,
        pint: 0.473176,
        cup: 0.236588
    },
    area: {
        square_meter: 1,
        hectare: 10000,
        acre: 4046.85642,
        square_foot: 0.092903,
        square_yard: 0.836127
    },
    dataTransfer: {
        bps: 1,
        kbps: 1024,
        mbps: 1024 ** 2,
        gbps: 1024 ** 3
    },
    digitalStorage: {
        byte: 1,
        kilobyte: 1024,
        megabyte: 1024 ** 2,
        gigabyte: 1024 ** 3
    },
    energy: {
        joule: 1,
        kilojoule: 1000,
        calorie: 4.184,
        watt_hour: 3600,
        kilowatt_hour: 3600000
    },
    frequency: {
        hertz: 1,
        kilohertz: 1000,
        megahertz: 1000000
    },
    mass: {
        kilogram: 1,
        gram: 0.001,
        milligram: 0.000001,
        pound: 0.453592,
        ounce: 0.0283495
    },
    planeAngle: {
        radian: 1,
        degree: 57.2958,
        gon: 63.662
    },
    pressure: {
        pascal: 1,
        bar: 100000,
        psi: 6894.76
    },
    speed: {
        meter_per_second: 1,
        kilometer_per_hour: 1 / 3.6,
        mile_per_hour: 1 / 2.23694
    },
    time: {
        second: 1,
        minute: 60,
        hour: 3600
    },
    temperature: {
        celsius: 1,
        fahrenheit: (x) => (x - 32) * 5 / 9,
        kelvin: (x) => x - 273.15
    },
    force: {
        newton: 1,
        dyne: 0.00001,
        pound_force: 4.44822
    },
    power: {
        watt: 1,
        kilowatt: 1000,
        horsepower: 745.7
    },
    electricCurrent: {
        ampere: 1,
        milliampere: 0.001
    },
    voltage: {
        volt: 1,
        millivolt: 0.001,
        kilovolt: 1000
    },
    resistance: {
        ohm: 1,
        kiloohm: 1000,
        megaohm: 1000000
    },
    fuelConsumption: {
        liter_per_100km: 1,
        mpg_us: 235.214583,
        mpg_uk: 282.481
    },
};

// Elements
const unitTypeElement = document.getElementById('unitType');
const inputUnitElement = document.getElementById('inputUnit');
const outputUnitElement = document.getElementById('outputUnit');
const inputValueElement = document.getElementById('inputValue');
const resultElement = document.getElementById('result');
const formulaElement = document.getElementById('formula');

// Update units and formula
function updateUnits() {
    const selectedType = unitTypeElement.value;
    const unitOptions = units[selectedType];

    // Clear previous options
    inputUnitElement.innerHTML = '';
    outputUnitElement.innerHTML = '';

    for (const unit in unitOptions) {
        inputUnitElement.innerHTML += `<option value="${unit}">${unit}</option>`;
        outputUnitElement.innerHTML += `<option value="${unit}">${unit}</option>`;
    }

    // Display formula (if any logic for formula is implemented)
    // formulaElement.textContent = getFormula(selectedType);
}

// Conversion logic
function convert() {
    const selectedType = unitTypeElement.value;
    const inputValue = parseFloat(inputValueElement.value);
    const inputUnit = inputUnitElement.value;
    const outputUnit = outputUnitElement.value;

    if (isNaN(inputValue)) {
        resultElement.innerHTML = 'Please enter a valid number';
        return;
    }

    // Handle temperature conversion separately
    if (selectedType === 'temperature') {
        let tempInCelsius;

        if (inputUnit === 'celsius') {
            tempInCelsius = inputValue;
        } else if (inputUnit === 'fahrenheit') {
            tempInCelsius = units.temperature.fahrenheit(inputValue);
        } else if (inputUnit === 'kelvin') {
            tempInCelsius = units.temperature.kelvin(inputValue);
        }

        let convertedValue;
        if (outputUnit === 'celsius') {
            convertedValue = tempInCelsius;
        } else if (outputUnit === 'fahrenheit') {
            convertedValue = (tempInCelsius * 9 / 5) + 32;
        } else if (outputUnit === 'kelvin') {
            convertedValue = tempInCelsius + 273.15;
        }

        // Format the result
        resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);
        return;
    }

    // Handle fuelConsumption conversion
    if (selectedType === 'fuelConsumption') {
        const inputUnitFactor = units.fuelConsumption[inputUnit];
        const outputUnitFactor = units.fuelConsumption[outputUnit];

        const convertedValue = inputValue * (outputUnitFactor / inputUnitFactor);

        // Format the result
        resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);
        return;
    }

    // For other types of conversion (length, area, etc.)
    const inputUnitFactor = units[selectedType][inputUnit];
    const outputUnitFactor = units[selectedType][outputUnit];

    // Corrected conversion logic
    let convertedValue;
    if (inputUnitFactor > outputUnitFactor) {
        convertedValue = inputValue * (inputUnitFactor / outputUnitFactor);
    } else {
        convertedValue = inputValue / (inputUnitFactor / outputUnitFactor);
    }

    // Format the result
    resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);
}

// Function to format the result, showing decimals only when necessary
function formatResult(inputValue, inputUnit, convertedValue, outputUnit) {
    // Check if the converted value has decimal places
    if (Number.isInteger(convertedValue)) {
        return `${inputValue} ${inputUnit} = ${convertedValue} ${outputUnit}`;
    } else {
        return `${inputValue} ${inputUnit} = ${convertedValue.toFixed(2)} ${outputUnit}`;
    }
}

updateUnits();
