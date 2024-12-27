const formulas = {
    length: {
        meter: '1 meter (m)',
        kilometer: '1 kilometer (km) = 1000 meters (m)',
        centimeter: '1 centimeter (cm) = 0.01 meters (m)',
        millimeter: '1 millimeter (mm) = 0.001 meters (m)',
        micrometer: '1 micrometer (µm) = 1e-6 meters (m)',
        nanometer: '1 nanometer (nm) = 1e-9 meters (m)',
        mile: '1 mile (mi) = 1609.344 meters (m)',
        yard: '1 yard (yd) = 0.9144 meters (m)',
        foot: '1 foot (ft) = 0.3048 meters (m)',
        inch: '1 inch (in) = 0.0254 meters (m)',
        nautical_mile: '1 nautical mile = 1852 meters (m)'
    },
    volume: {
        liter: '1 liter (L)',
        milliliter: '1 milliliter (mL) = 0.001 liters (L)',
        cubic_meter: '1 cubic meter (m³) = 1000 liters (L)',
        cubic_centimeter: '1 cubic centimeter (cm³) = 0.001 liters (L)',
        cubic_inch: '1 cubic inch (in³) = 0.0163871 liters (L)',
        cubic_foot: '1 cubic foot (ft³) = 28.3168 liters (L)',
        cubic_yard: '1 cubic yard (yd³) = 764.555 liters (L)',
        gallon: '1 gallon (gal) = 3.78541 liters (L)',
        quart: '1 quart (qt) = 0.946353 liters (L)',
        pint: '1 pint (pt) = 0.473176 liters (L)',
        cup: '1 cup (c) = 0.236588 liters (L)',
        fluid_ounce: '1 fluid ounce (fl oz) = 0.0295735 liters (L)',
        tablespoon: '1 tablespoon (tbsp) = 0.0147868 liters (L)',
        teaspoon: '1 teaspoon (tsp) = 0.00492892 liters (L)'
    },
    area: {
        square_meter: '1 square meter (m²)',
        square_kilometer: '1 square kilometer (km²) = 1e6 square meters (m²)',
        square_centimeter: '1 square centimeter (cm²) = 1e-4 square meters (m²)',
        square_millimeter: '1 square millimeter (mm²) = 1e-6 square meters (m²)',
        hectare: '1 hectare (ha) = 10000 square meters (m²)',
        acre: '1 acre = 4046.85642 square meters (m²)',
        square_mile: '1 square mile (mi²) = 2.58999e6 square meters (m²)',
        square_yard: '1 square yard (yd²) = 0.836127 square meters (m²)',
        square_foot: '1 square foot (ft²) = 0.092903 square meters (m²)',
        square_inch: '1 square inch (in²) = 0.00064516 square meters (m²)'
    },
    dataTransfer: {
        bps: '1 bit per second (bps)',
        kbps: '1 kilobit per second (kbps) = 1024 bits per second (bps)',
        mbps: '1 megabit per second (Mbps) = 1024 kilobits per second (kbps)',
        gbps: '1 gigabit per second (Gbps) = 1024 megabits per second (Mbps)',
        tbps: '1 terabit per second (Tbps) = 1024 gigabits per second (Gbps)'
    },
    digitalStorage: {
        byte: '1 byte (B)',
        kilobyte: '1 kilobyte (KB) = 1024 bytes (B)',
        megabyte: '1 megabyte (MB) = 1024 kilobytes (KB)',
        gigabyte: '1 gigabyte (GB) = 1024 megabytes (MB)',
        terabyte: '1 terabyte (TB) = 1024 gigabytes (GB)',
        petabyte: '1 petabyte (PB) = 1024 terabytes (TB)'
    },
    energy: {
        joule: '1 joule (J)',
        kilojoule: '1 kilojoule (kJ) = 1000 joules (J)',
        calorie: '1 calorie (cal) = 4.184 joules (J)',
        kilocalorie: '1 kilocalorie (kcal) = 4184 joules (J)',
        watt_hour: '1 watt-hour (Wh) = 3600 joules (J)',
        kilowatt_hour: '1 kilowatt-hour (kWh) = 3600000 joules (J)',
        british_thermal_unit: '1 British thermal unit (BTU) = 1055.06 joules (J)',
        electronvolt: '1 electronvolt (eV) = 1.60218e-19 joules (J)'
    },
    frequency: {
        hertz: '1 hertz (Hz)',
        kilohertz: '1 kilohertz (kHz) = 1000 hertz (Hz)',
        megahertz: '1 megahertz (MHz) = 1000000 hertz (Hz)',
        gigahertz: '1 gigahertz (GHz) = 1e9 hertz (Hz)'
    },
    mass: {
        kilogram: '1 kilogram (kg)',
        gram: '1 gram (g) = 0.001 kilograms (kg)',
        milligram: '1 milligram (mg) = 1e-6 kilograms (kg)',
        microgram: '1 microgram (µg) = 1e-9 kilograms (kg)',
        ton: '1 ton (t) = 1000 kilograms (kg)',
        pound: '1 pound (lb) = 0.453592 kilograms (kg)',
        ounce: '1 ounce (oz) = 0.0283495 kilograms (kg)',
        stone: '1 stone (st) = 6.35029 kilograms (kg)'
    },
    planeAngle: {
        radian: '1 radian (rad)',
        degree: '1 degree (°) = 0.0174533 radians (rad)',
        gon: '1 gon = 0.015707963 radians (rad)',
        mil: '1 mil = 0.0009817477 radians (rad)'
    },
    pressure: {
        pascal: '1 pascal (Pa)',
        hectopascal: '1 hectopascal (hPa) = 100 pascals (Pa)',
        kilopascal: '1 kilopascal (kPa) = 1000 pascals (Pa)',
        bar: '1 bar = 100000 pascals (Pa)',
        millibar: '1 millibar (mbar) = 100 pascals (Pa)',
        psi: '1 pound per square inch (psi) = 6894.76 pascals (Pa)',
        atmosphere: '1 atmosphere (atm) = 101325 pascals (Pa)',
        torr: '1 torr = 133.322 pascals (Pa)'
    },
    speed: {
        meter_per_second: '1 meter per second (m/s)',
        kilometer_per_hour: '1 kilometer per hour (km/h) = 0.277778 meters per second (m/s)',
        mile_per_hour: '1 mile per hour (mph) = 0.44704 meters per second (m/s)',
        foot_per_second: '1 foot per second (ft/s) = 0.3048 meters per second (m/s)',
        knot: '1 knot = 0.514444 meters per second (m/s)'
    },
    time: {
        second: '1 second (s)',
        millisecond: '1 millisecond (ms) = 0.001 seconds (s)',
        microsecond: '1 microsecond (µs) = 1e-6 seconds (s)',
        nanosecond: '1 nanosecond (ns) = 1e-9 seconds (s)',
        minute: '1 minute (min) = 60 seconds (s)',
        hour: '1 hour (h) = 3600 seconds (s)',
        day: '1 day = 86400 seconds (s)',
        week: '1 week = 604800 seconds (s)',
        month: '1 month = 2.628e6 seconds (s)',
        year: '1 year = 3.154e7 seconds (s)'
    },
    temperature: {
        celsius: '1 degree Celsius (°C)',
        fahrenheit: '1 degree Fahrenheit (°F) = (°F - 32) * 5/9',
        kelvin: '1 Kelvin (K) = K - 273.15'
    },
    force: {
        newton: '1 newton (N)',
        kilonewton: '1 kilonewton (kN) = 1000 newtons (N)',
        dyne: '1 dyne (dyn) = 0.00001 newtons (N)',
        pound_force: '1 pound-force (lbf) = 4.44822 newtons (N)',
        kilogram_force: '1 kilogram-force (kgf) = 9.80665 newtons (N)'
    },
    power: {
        watt: '1 watt (W)',
        kilowatt: '1 kilowatt (kW) = 1000 watts (W)',
        megawatt: '1 megawatt (MW) = 1e6 watts (W)',
        horsepower: '1 horsepower (hp) = 745.7 watts (W)'
    },
    electricCurrent: {
        ampere: '1 ampere (A)',
        milliampere: '1 milliampere (mA) = 0.001 amperes (A)',
        microampere: '1 microampere (µA) = 1e-6 amperes (A)'
    },
    voltage: {
        volt: '1 volt (V)',
        millivolt: '1 millivolt (mV) = 0.001 volts (V)',
        kilovolt: '1 kilovolt (kV) = 1000 volts (V)'
    },
    resistance: {
        ohm: '1 ohm (Ω)',
        milliohm: '1 milliohm (mΩ) = 0.001 ohms (Ω)',
        kiloohm: '1 kiloohm (kΩ) = 1000 ohms (Ω)',
        megaohm: '1 megaohm (MΩ) = 1e6 ohms (Ω)'
    },
    fuelConsumption: {
        liter_per_100km: '1 liter per 100 kilometers (L/100km)',
        mpg_us: '1 mile per gallon (US) = 235.214583 L/100km',
        mpg_uk: '1 mile per gallon (UK) = 282.481 L/100km'
    },
};

// Function to display the formula for the selected unit
function displayFormula() {
    const selectedType = unitTypeElement.value;
    const inputUnit = inputUnitElement.value;
    const outputUnit = outputUnitElement.value;

    const inputFormula = formulas[selectedType][inputUnit];
    const outputFormula = formulas[selectedType][outputUnit];

    formulaElement.innerHTML = `<strong>Input Unit Formula:</strong> ${inputFormula}<br>
                                <strong>Output Unit Formula:</strong> ${outputFormula}`;
}

