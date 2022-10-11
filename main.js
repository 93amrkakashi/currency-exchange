let result = document.querySelector(".much h4 span");
let select = document.querySelectorAll("option");
let amount = document.querySelector(".amount");
let btn = document.querySelector(".btn");
let choices = document.querySelector(".example").value;

fetch(
  "https://api.currencyfreaks.com/latest?apikey=cb2616954ef043a094ca1c6ef67f4d7a"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    btn.onclick = function choose() {
      let choices = document.querySelector(".example").value;

      if (choices == "USD") {
        // console.log("usd");
        result.innerHTML = (
          parseInt(amount.value) * currency.rates["EGP"]
        ).toFixed(2);
      } else {
        // console.log("sar");
        result.innerHTML = (
          parseInt(amount.value) * (currency.rates["EGP"] / currency.rates["SAR"])).toFixed(2);
      }
    };
  });
