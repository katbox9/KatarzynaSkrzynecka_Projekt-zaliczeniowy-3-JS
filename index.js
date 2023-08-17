const form = document.getElementById("currency-container");

function convertCurrency() {
  axios
    .get("https://api.nbp.pl/?ref=public-apis")

    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

// const convertCurrency() => {}

form.addEventListener("submit", convertCurrency);
