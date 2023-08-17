const form = document.getElementById("currency-container");
const input = document.getElementById("amount-to-be-calculated");
const select = document.getElementById("currency");
const btn = document.getElementById("btn");

function convertCurrency(event) {
  event.preventDefault();
  axios
    .get(
      `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/?format=json`
    )
    .then((response) => calculateResult(response.data.rates[0].mid))
    .catch((error) => console.log(error));
}

// function calculateResult(rate) {
//   return input * rate;
// }

form.addEventListener("submit", convertCurrency);
