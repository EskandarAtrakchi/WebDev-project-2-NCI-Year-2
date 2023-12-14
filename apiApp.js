async function loadTickerData() {
    var searchInput = document.getElementById('searchInput');
    var userInput = searchInput.value;
    if (userInput === '') {
        alert('Please input crypto coins or tokens to retrieve the data.\nExample: bitcoin, ethereum, dogecoin, etc.');
    } else {
        try {
            
            document.getElementById('tickerPricesTextInfo').innerHTML = 'This is the retrieved data, you can request multiple coins or tokens by separating them with a space.\nExample; XRP NEAR BTC ETH';
            document.getElementById('tickerChartInfo').innerHTML = 'Data retrieved from the API is represented here in a bar chart.';

            const response = await fetch('http://localhost:3000/ticker/');
            const result = await response.json();
            const data = result && result.length ? result : [];

            const searchInput = document.getElementById('searchInput');
            const userInput = searchInput.value.toLowerCase();

            const tickerDataDiv = document.getElementById('tickerDataDiv');
            tickerDataDiv.innerHTML = '';

            // Split the user input into an array of symbols
            const symbols = userInput.split(' ');

            // Create a table
            const table = document.createElement('table');
            table.border = '1';

            // Create table header
            const headerRow = table.insertRow();
            headerRow.innerHTML = '<th>Coin</th><th>Symbol</th><th>ID</th><th>Price USD</th><th>24h Volume USD</th><th>Market Cap USD</th><th>Percent Change (1h)</th><th>Percent Change (24h)</th><th>Percent Change (7d)</th><th>Last Updated</th>';

            symbols.forEach(symbol => {
                const filteredData = data.filter(crypto => crypto.symbol.toLowerCase() === symbol);

                if (filteredData.length > 0) {
                    // Create a table row
                    const row = table.insertRow();

                    // Populate table cells
                    row.innerHTML = `
                        <td>${filteredData[0].name}</td>
                        <td>${filteredData[0].symbol}</td>
                        <td>${filteredData[0].id}</td>
                        <td>${filteredData[0].price_usd}</td>
                        <td>${filteredData[0]['24h_volume_usd']}</td>
                        <td>${filteredData[0].market_cap_usd}</td>
                        <td>${filteredData[0].percent_change_1h}</td>
                        <td>${filteredData[0].percent_change_24h}</td>
                        <td>${filteredData[0].percent_change_7d}</td>
                        <td>${filteredData[0].last_updated}</td>
                    `;

                    table.appendChild(row);
                } else {
                    console.error(`No data found for ${symbol}`);
                }
            });

            tickerDataDiv.appendChild(table);

            // Get the existing chart instance
            const existingChart = Chart.getChart('tickerChart');

            // If a chart exists, destroy it before creating a new one
            if (existingChart) {
                existingChart.destroy();
            }

            // Create a new bar chart with a logarithmic scale for the y-axis
            const ctxTicker = document.getElementById('tickerChart').getContext('2d');
            const tickerChart = new Chart(ctxTicker, {
                type: 'bar',
                data: {
                    labels: symbols,
                    datasets: symbols.map(symbol => {
                        const filteredData = data.filter(crypto => crypto.symbol.toLowerCase() === symbol);
                        return {
                            label: `${symbol} Price (USD)`,
                            data: filteredData.length > 0 ? [parseFloat(filteredData[0].price_usd)] : [0],
                            backgroundColor: 'rgba(75, 192, 192, 0.7)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        };
                    })
                },
                options: {
                    scales: {
                        y: {
                            type: 'logarithmic',
                            position: 'left',
                            beginAtZero: true,
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error fetching data: ' + error.toString());
        }
    }async function loadTickerData() {
    var searchInput = document.getElementById('searchInput');
    var userInput = searchInput.value;
    if (userInput === '') {
        alert('Please input crypto coins or tokens to retrieve the data.\nExample: bitcoin, ethereum, dogecoin, etc.');
    } else {
        try {
            
            document.getElementById('tickerPricesTextInfo').innerHTML = 'This is the retrieved data, you can request multiple coins or tokens by separating them with a space.\nExample; XRP NEAR BTC ETH';
            document.getElementById('tickerChartInfo').innerHTML = 'Data retrieved from the API is represented here in a bar chart.';

            const response = await fetch('http://localhost:3000/ticker/');
            const result = await response.json();
            const data = result && result.length ? result : [];

            const searchInput = document.getElementById('searchInput');
            const userInput = searchInput.value.toLowerCase();

            const tickerDataDiv = document.getElementById('tickerDataDiv');
            tickerDataDiv.innerHTML = '';

            // Split the user input into an array of symbols
            const symbols = userInput.split(' ');

            // Create a table
            const table = document.createElement('table');
            table.border = '1';

            // Create table header
            const headerRow = table.insertRow();
            headerRow.innerHTML = '<th>Coin</th><th>Symbol</th><th>ID</th><th>Price USD</th><th>24h Volume USD</th><th>Market Cap USD</th><th>Percent Change (1h)</th><th>Percent Change (24h)</th><th>Percent Change (7d)</th><th>Last Updated</th>';

            symbols.forEach(symbol => {
                const filteredData = data.filter(crypto => crypto.symbol.toLowerCase() === symbol);

                if (filteredData.length > 0) {
                    // Create a table row
                    const row = table.insertRow();

                    // Populate table cells
                    row.innerHTML = `
                        <td>${filteredData[0].name}</td>
                        <td>${filteredData[0].symbol}</td>
                        <td>${filteredData[0].id}</td>
                        <td>${filteredData[0].price_usd}</td>
                        <td>${filteredData[0]['24h_volume_usd']}</td>
                        <td>${filteredData[0].market_cap_usd}</td>
                        <td>${filteredData[0].percent_change_1h}</td>
                        <td>${filteredData[0].percent_change_24h}</td>
                        <td>${filteredData[0].percent_change_7d}</td>
                        <td>${filteredData[0].last_updated}</td>
                    `;

                    table.appendChild(row);
                } else {
                    console.error(`No data found for ${symbol}`);
                }
            });

            tickerDataDiv.appendChild(table);

            // Get the existing chart instance
            const existingChart = Chart.getChart('tickerChart');

            // If a chart exists, destroy it before creating a new one
            if (existingChart) {
                existingChart.destroy();
            }

            // Create a new bar chart with a logarithmic scale for the y-axis
            const ctxTicker = document.getElementById('tickerChart').getContext('2d');
            const tickerChart = new Chart(ctxTicker, {
                type: 'bar',
                data: {
                    labels: symbols,
                    datasets: symbols.map(symbol => {
                        const filteredData = data.filter(crypto => crypto.symbol.toLowerCase() === symbol);
                        return {
                            label: `${symbol} Price (USD)`,
                            data: filteredData.length > 0 ? [parseFloat(filteredData[0].price_usd)] : [0],
                            backgroundColor: 'rgba(75, 192, 192, 0.7)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        };
                    })
                },
                options: {
                    scales: {
                        y: {
                            type: 'logarithmic',
                            position: 'left',
                            beginAtZero: true,
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error fetching data: ' + error.toString());
        }
    }