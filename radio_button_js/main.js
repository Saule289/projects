btnElement = document.querySelector(".btn"); //получаем элемент с классом btn
resultElement = document.querySelector(".result"); //получаем элемент с классом result
checkboxButtons = document.querySelectorAll('[name="product"]'); //получаем список всех checkbox элементов

btnElement.addEventListener("click", function(){  //по нажатию на кнопку Отправить
    let total = 0;          // общая стоимость
    for (const checkboxButton of checkboxButtons) {      //для каждой checkbox-кнопки из списка checkbox-кнопок
        if(checkboxButton.checked){
          total += parseInt(checkboxButton.value)
        }
    else {  
    resultElement.textContent =  `${total} ` + 'руб';
            }
        }
    }
           );