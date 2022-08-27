document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('form')
    form.onsubmit = ()=>{
        // specify Base currecy (USD)
        const BASE = 'USD';
        // specify other currency (IQD)
        let curr = document.getElementById('currency').value
        const API_KEY = "fYVzYjb3c711SISoq0ZWrWcfJN9CGSSLrmISg4F7";

        //  HTTP request
        fetch('https://api.currencyapi.com/v3/latest?apikey='+API_KEY+'&currencies='+curr+'&base_currency='+BASE)
        .then((res)=>{
            return res.json()
        })
        .then((jsonResp)=>{
            console.log(jsonResp)
            let p = document.querySelector('p')
            // extract value from returned json
            let value = jsonResp.data[curr].value
            p.innerHTML = `1 ${BASE} is equal to ${value.toFixed(2)} ${curr}`;
        })

        return false;
    }

})