document.addEventListener('DOMContentLoaded', () => {
    const currencyFrom = document.getElementById('currencyFrom');
    const currencyTo = document.getElementById('currencyTo');

    // Fetch currency list
    fetch('https://open.er-api.com/v6/latest')
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            currencies.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.textContent = currency;
                currencyFrom.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.textContent = currency;
                currencyTo.appendChild(optionTo);
            });
        })
        .catch(error => console.error('Error fetching currency data:', error));

    // Convert currency
    window.convertCurrency = () => {
        const fromCurrency = currencyFrom.value;
        const toCurrency = currencyTo.value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount)) {
            document.getElementById('conversionResult').textContent = 'Please enter a valid amount.';
            return;
        }

        fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const result = amount * rate;
                document.getElementById('conversionResult').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
            })
            .catch(error => console.error('Error converting currency:', error));
    };
});
