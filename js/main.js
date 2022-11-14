btnElement = document.querySelector(".button");
nameElement = document.querySelector('[name="firstname"]');
surnameElement = document.querySelector('[name="secondname"]');
resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function() {
resultElement.textContent = "Здравствуйте, " + nameElement.value + ' ' + surnameElement.value + "!";
});

