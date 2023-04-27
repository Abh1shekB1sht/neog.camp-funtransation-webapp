var btnReference = document.querySelector("#btn-reference");
var txtArea = document.querySelector("#txt-area");
var outputArea = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getURLselector(text) {
  return serverURL + "?" + "text=" + text;
}

function clickedBtn() {
  var inputTxt = txtArea.value;

  fetch(getURLselector(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputArea.innerText = translatedText;
    });
}

btnReference.addEventListener("click", clickedBtn);
