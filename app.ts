let result = document.querySelector(".much h4 span") as HTMLSpanElement;
let select = document.querySelectorAll(
  "option"
) as NodeListOf<HTMLOptionElement>;
let amount = document.querySelector(".amount") as HTMLInputElement;
let btn = document.querySelector("button") as HTMLButtonElement;
let choices = document.querySelector(".example") as HTMLSelectElement;

fetch(
  "https://api.currencyfreaks.com/latest?apikey=cb2616954ef043a094ca1c6ef67f4d7a"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    btn.onclick = function choose() {
      // let choices:string = choices.value;

      if (choices.value == "USD") {
        // console.log("usd");
        result.innerHTML = (
          parseInt(amount.value) * currency.rates["EGP"]
        ).toFixed(2);
      } else {
        // console.log("sar");
        result.innerHTML = (
          parseInt(amount.value) *
          (currency.rates["EGP"] / currency.rates["SAR"])
        ).toFixed(2);
      }
    };
  });


