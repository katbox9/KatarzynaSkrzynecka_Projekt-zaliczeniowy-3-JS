const form = document.getElementById("currency-container");
const input = document.getElementById("amount-to-be-calculated");
const select = document.getElementById("currency");
const btn = document.getElementById("btn");
const output = document.getElementById("result");

function getExchangeRate(event) {
  event.preventDefault();
  axios
    .get(
      `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/?format=json`
    )
    .then((response) => convertCurrency(response.data.rates[0].mid))
    .catch((error) => console.log(error));
}

function convertCurrency(rate) {
  const userInput = input.value;
  const total = userInput * rate;
  output.innerText = `to ${total.toFixed(2)} PLN`;
}

form.addEventListener("submit", getExchangeRate);
