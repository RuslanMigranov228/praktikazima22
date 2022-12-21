(function () {
  "use strict";

  // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  var forms = document.querySelectorAll(".needs-validation");

  // Зацикливайтесь на них и предотвращайте отправку
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// валидация для проверки введен пароль или нет
$("body").on("click", ".password-control", function () {
  if ($("#validatePass").attr("type") == "password") {
    $(this).html("Скрыть пароль");
    // если кнопка имеет тип пароль, то высвечивается скрыть пароль
    $("#validatePass").attr("type", "text");
  } else {
    $(this).html("Показать пароль");
    // если кнопка имеет тип текст, иначе меняется на показать пароль
    $("#validatePass").attr("type", "password");
  }

  return false;
});
// проверка -показать пароля-
const txt = document.querySelector(".txt");
let item = 0;

let fun = setInterval(function () {
  item += 1;
  if (item === 11) {
    document.getElementById("au").play();
    item -= 10;
  }
  txt.innerHTML = item;
}, 1000);
// интервал счетчик на 10 секунд
