const form = document.getElementById("currency-container");
const input = document.getElementById("amount-to-be-calculated");
const select = document.getElementById("currency");
const btn = document.getElementById("btn");

function getExchangeRate(event) {
  event.preventDefault();
  axios
    .get(
      `https://api.nbp.pl/api/exchangerates/rates/a/${select.value}/?format=json`
    )
    .then((response) => getExchangeRate(response.data.rates[0].mid))
    .catch((error) => console.log(error));
}

function convertCurrency(rate) {
  const rate = response?.data?.rates[0]?.mid;
  if (rate) {
    const userInput = input.value;
    return userInput * rate;
  } else {
    alert("Mamy problem. Spróbuj ponownie za kilka minut.");
  }
}

form.addEventListener("submit", convertCurrency);
