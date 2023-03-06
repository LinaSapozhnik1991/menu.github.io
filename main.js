btnElement = document.querySelector(".btn"); //получаем элемент с классом btn
resultElement = document.querySelector(".result"); //получаем элемент с классом result
checkboxButtons = document.querySelectorAll('[name="food"]');
btnElement.addEventListener("click", function() {  //по нажатию на кнопку Отправить
    //добавить переменную total
    let total=0;
for (const checkboxButton of checkboxButtons){      //для каждой checkbox-кнопки из списка checkbox-кнопок
if(checkboxButton.checked){  
    total+=parseInt(checkboxButton.value);                //если checkbox-кнопка выбрана
    //прибавить к total значение checkbox value
}
}if(total.lenght!=0){
resultElement.textContent =(`${total} руб`);}    } )              //записать значение в элемент result


