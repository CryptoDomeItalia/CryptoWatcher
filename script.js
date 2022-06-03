/* Task 1: Set your API key here by replacing the ... */
const APIKEY = '...';

/* Task 2: Define the correct Covalent API endpoint here by replacing the ... */
const endpoint = '/v1/.../.../'

/* Task 3: Select your tickers to track by replacing the ... */
const tickers = ["BTC", "..."]

/* ************************************** */
// Don't touch the rest of this code!

// Token table reset
const tableRef = document.getElementById('tokenTable').getElementsByTagName('tbody')[0];
tableRef.innerHTML = "";

// Covalent API request setup
const url = new URL(`https://api.covalenthq.com${endpoint}`);

url.search = new URLSearchParams({
    key: APIKEY,
    tickers: tickers
})

// Use Fetch API to get Covalent data and display in token table
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let tokens = data.data.items;
    return tokens.map(function(token) { // Map through the results and for each run the code below
    tableRef.insertRow().innerHTML = 
        `<td><img src=${token.logo_url} style=width:40px;height:40px;></td>` +
        `<td> ${token.contract_name} </td>` +
        `<td> ${token.contract_ticker_symbol} </td>` +
        `<td> $${parseFloat(token.quote_rate).toFixed(2)} </td>`
    })
})
