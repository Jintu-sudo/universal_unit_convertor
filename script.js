const units = {
    length: {
        meter: 1,
        kilometer: 1000,
        centimeter: 0.01,
        millimeter: 0.001,
        micrometer: 1e-6,
        nanometer: 1e-9,
        mile: 1609.344,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        nautical_mile: 1852
    },
    volume: {
        liter: 1,
        milliliter: 0.001,
        cubic_meter: 1000,
        cubic_centimeter: 0.001,
        cubic_inch: 0.0163871,
        cubic_foot: 28.3168,
        cubic_yard: 764.555,
        gallon: 3.78541,
        quart: 0.946353,
        pint: 0.473176,
        cup: 0.236588,
        fluid_ounce: 0.0295735,
        tablespoon: 0.0147868,
        teaspoon: 0.00492892
    },
    area: {
        square_meter: 1,
        square_kilometer: 1e6,
        square_centimeter: 1e-4,
        square_millimeter: 1e-6,
        hectare: 10000,
        acre: 4046.85642,
        square_mile: 2.58999e6,
        square_yard: 0.836127,
        square_foot: 0.092903,
        square_inch: 0.00064516
    },
    dataTransfer: {
        bps: 1,
        kbps: 1024,
        mbps: 1024 ** 2,
        gbps: 1024 ** 3,
        tbps: 1024 ** 4
    },
    digitalStorage: {
        byte: 1,
        kilobyte: 1024,
        megabyte: 1024 ** 2,
        gigabyte: 1024 ** 3,
        terabyte: 1024 ** 4,
        petabyte: 1024 ** 5
    },
    energy: {
        joule: 1,
        kilojoule: 1000,
        calorie: 4.184,
        kilocalorie: 4184,
        watt_hour: 3600,
        kilowatt_hour: 3600000,
        british_thermal_unit: 1055.06,
        electronvolt: 1.60218e-19
    },
    frequency: {
        hertz: 1,
        kilohertz: 1000,
        megahertz: 1000000,
        gigahertz: 1e9
    },
    mass: {
        kilogram: 1,
        gram: 0.001,
        milligram: 1e-6,
        microgram: 1e-9,
        ton: 1000,
        pound: 0.453592,
        ounce: 0.0283495,
        stone: 6.35029
    },
    planeAngle: {
        radian: 1,
        degree: 57.2958,
        gon: 63.662,
        mil: 0.0009817477
    },
    pressure: {
        pascal: 1,
        hectopascal: 100,
        kilopascal: 1000,
        bar: 100000,
        millibar: 100,
        psi: 6894.76,
        atmosphere: 101325,
        torr: 133.322
    },
    speed: {
        meter_per_second: 1,
        kilometer_per_hour: 1 / 3.6,
        mile_per_hour: 1 / 2.23694,
        foot_per_second: 0.3048,
        knot: 0.514444
    },
    time: {
        second: 1,
        millisecond: 1e-3,
        microsecond: 1e-6,
        nanosecond: 1e-9,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2.628e6,
        year: 3.154e7
    },
    temperature: {
        celsius: 1,
        fahrenheit: (x) => (x - 32) * 5 / 9,
        kelvin: (x) => x - 273.15
    },
    force: {
        newton: 1,
        kilonewton: 1000,
        dyne: 0.00001,
        pound_force: 4.44822,
        kilogram_force: 9.80665
    },
    power: {
        watt: 1,
        kilowatt: 1000,
        megawatt: 1e6,
        horsepower: 745.7
    },
    electricCurrent: {
        ampere: 1,
        milliampere: 0.001,
        microampere: 1e-6
    },
    voltage: {
        volt: 1,
        millivolt: 0.001,
        kilovolt: 1000
    },
    resistance: {
        ohm: 1,
        milliohm: 0.001,
        kiloohm: 1000,
        megaohm: 1e6
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
const formulaElement = document.getElementById('formula'); // New element to display formulas

// Update units
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

    displayFormula(); // Display the formula when units are updated
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

        resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);
        return;
    }

    // Handle fuelConsumption conversion
    if (selectedType === 'fuelConsumption') {
        const inputUnitFactor = units.fuelConsumption[inputUnit];
        const outputUnitFactor = units.fuelConsumption[outputUnit];

        const convertedValue = inputValue * (outputUnitFactor / inputUnitFactor);
        resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);
        return;
    }

    // For other types of conversion
    const inputUnitFactor = units[selectedType][inputUnit];
    const outputUnitFactor = units[selectedType][outputUnit];

    const convertedValue = inputValue * (inputUnitFactor / outputUnitFactor);

    resultElement.innerHTML = formatResult(inputValue, inputUnit, convertedValue, outputUnit);

    displayFormula(); // Display the formula after conversion
}

// Function to format the result, showing decimals only when necessary
function formatResult(inputValue, inputUnit, convertedValue, outputUnit) {
    if (Number.isInteger(convertedValue)) {
        return `${inputValue} ${inputUnit} = ${convertedValue} ${outputUnit}`;
    } else {
        return `${inputValue} ${inputUnit} = ${convertedValue.toFixed(10)} ${outputUnit}`;
    }
}

// Initialize units on page load
window.onload = updateUnits;
