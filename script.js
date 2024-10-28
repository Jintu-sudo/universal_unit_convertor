// Units data for all categories
const units = {
    length: { meter: 1, kilometer: 0.001, centimeter: 100, millimeter: 1000, mile: 0.000621371, yard: 1.09361, foot: 3.28084, inch: 39.3701 },
    volume: { liter: 1, milliliter: 1000, cubic_meter: 0.001, gallon: 0.264172, quart: 1.05669, pint: 2.11338, cup: 4.22675 },
    area: { square_meter: 1, hectare: 0.0001, acre: 0.000247105, square_foot: 10.7639, square_yard: 1.19599 },
    dataTransfer: { bps: 1, kbps: 0.001, mbps: 0.000001, gbps: 0.000000001 },
    digitalStorage: { byte: 1, kilobyte: 0.001, megabyte: 0.000001, gigabyte: 0.000000001 },
    energy: { joule: 1, kilojoule: 0.001, calorie: 0.239006, watt_hour: 0.000277778 },
    frequency: { hertz: 1, kilohertz: 0.001, megahertz: 0.000001 },
    mass: { kilogram: 1, gram: 1000, milligram: 1000000, pound: 2.20462, ounce: 35.274 },
    planeAngle: { radian: 1, degree: 57.2958, gon: 63.662 },
    pressure: { pascal: 1, bar: 0.00001, psi: 0.000145038 },
    speed: { meter_per_second: 1, kilometer_per_hour: 3.6, mile_per_hour: 2.23694 },
    time: { second: 1, minute: 0.0166667, hour: 0.000277778 },
    temperature: { celsius: 1, fahrenheit: (x) => (x - 32) * 5 / 9, kelvin: (x) => x - 273.15 },
    force: { newton: 1, dyne: 100000, pound_force: 0.224809 },
    power: { watt: 1, kilowatt: 0.001, horsepower: 0.00134102 },
    electricCurrent: { ampere: 1, milliampere: 1000 },
    voltage: { volt: 1, millivolt: 1000, kilovolt: 0.001 },
    resistance: { ohm: 1, kiloohm: 0.001, megaohm: 0.000001 },
    fuelConsumption: { liter_per_100km: 1, mpg_us: 235.214583, mpg_uk: 282.481 },
};

// Elements
const unitTypeElement = document.getElementById('unitType');
const inputUnitElement = document.getElementById('inputUnit');
const outputUnitElement = document.getElementById('outputUnit');
const inputValueElement = document.getElementById('inputValue');
const resultElement = document.getElementById('result');

// Initialize conversion options
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

        // Convert input value to Celsius
        if (inputUnit === 'celsius') {
            tempInCelsius = inputValue;
        } else if (inputUnit === 'fahrenheit') {
            tempInCelsius = units.temperature.fahrenheit(inputValue);
        } else if (inputUnit === 'kelvin') {
            tempInCelsius = inputValue - 273.15;
        }

        let convertedValue;

        // Convert Celsius to desired output unit
        if (outputUnit === 'celsius') {
            convertedValue = tempInCelsius;
        } else if (outputUnit === 'fahrenheit') {
            convertedValue = (tempInCelsius * 9 / 5) + 32;
        } else if (outputUnit === 'kelvin') {
            convertedValue = tempInCelsius + 273.15;
        }

        resultElement.innerHTML = `${inputValue} ${inputUnit} = ${convertedValue.toFixed(4)} ${outputUnit}`;
        return;
    }

    const inputUnitFactor = units[selectedType][inputUnit];
    const outputUnitFactor = units[selectedType][outputUnit];
    const convertedValue = (inputValue * outputUnitFactor) / inputUnitFactor;

    resultElement.innerHTML = `${inputValue} ${inputUnit} = ${convertedValue.toFixed(4)} ${outputUnit}`;
}

// Initialize the first set of units
updateUnits();
