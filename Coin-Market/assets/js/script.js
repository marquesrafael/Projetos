 var apikey = {
    key: 'KEY API HERE'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    }).then((api) => {
        var texto = "";
        for (let i = 0; i < 10; i++) {
            texto = texto + `
                <p>
                    <div>Rank: <b>${api.data[i].rank}</b></div>
                    <div>Nome: <b>${api.data[i].name} (${api.data[i].symbol})</b></div>
                    <div>Primeira data: ${api.data[i].first_historical_data}</div>
                    <div>Ultima data: ${api.data[i].last_historical_data}</div>
                </p>
                <hr>     
            `;
            document.getElementById("coins").innerHTML = texto;
        }
    }).catch((error) => {
        console.error(error.message);
    });