import "./styles.css";

var txtArea = document.querySelector("#txt-area");
var btnDecrease = document.querySelector("#btn-decrease");
var btnIncrease = document.querySelector("#btn-increase");
var txtOutput = document.querySelector("#output");

txtArea.addEventListener("change", () => {
  var outputText = txtArea.value;
  txtOutput.innerText = outputText;
});
