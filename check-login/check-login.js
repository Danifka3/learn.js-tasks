let login = prompt("Введите логин:", "");
if (login == "" || login == null) {
    alert ("Отменено");
} else if (login == "Админ") {
    let password = prompt("Введите пароль:", "");
    if (password == "Я главный") {
        alert("Здравствуйте!");
    } else if (password == "" || password == null) {
        alert("Отменено");
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Я вас не знаю");
}