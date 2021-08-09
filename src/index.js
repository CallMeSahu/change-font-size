import "./styles.css";

var txtArea = document.querySelector("#txt-area");
var btnDecrease = document.querySelector("#btn-decrease");
var btnIncrease = document.querySelector("#btn-increase");
var txtOutput = document.querySelector("#output");
var sizeOutput = document.querySelector("#size-output");
var initialSize = 20;

txtArea.addEventListener("change", () => {
  var outputText = txtArea.value;
  txtOutput.innerText = outputText;
});

btnIncrease.addEventListener("click", () => {
  initialSize += 2;
  var finalSize = String(initialSize) + "px";
  sizeOutput.innerText = finalSize;
  txtOutput.style.fontSize = finalSize;
});

btnDecrease.addEventListener("click", () => {
  initialSize -= 2;
  var finalSize = String(initialSize) + "px";
  sizeOutput.innerText = finalSize;
  txtOutput.style.fontSize = finalSize;
});
