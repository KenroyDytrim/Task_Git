// на старте тёмная тема не установлена
var dark = false;
// получаем доступ ко всей странице и к абзацу с переключателем
var a = document.body;
var button = document.getElementById("select");

// эта функция будет срабатывать при нажатии на переключатель
function darkLight() {
	// если тёмная тема не активна
	if (!dark) {
		// добавляем класс с тёмной темой ко всей странице
		a.className = "theme-dark";
		// меняем надпись на переключателе
		button.innerHTML = "Включить светлую тему";
		// а если активна — 
	} else {
		// добавляем класс со светлой темой ко всей странице
		a.className = "theme-light";
		// меняем надпись на переключателе
		button.innerHTML = "Включить тёмную тему";
	}

	// меняем значение темы на противоположное
	dark = !dark;
	// сохраняем в памяти статус ручного переключателя
	localStorage.setItem('selected', dark);
}

// выполняется сразу после загрузки страницы
window.addEventListener('DOMContentLoaded', (event) => {
	// если в нашем хранилище есть информация о том, что мы установили вручную тёмную тему
	if (localStorage.getItem('selected') == 'true') {
		// виртуально нажимаем на ручной переключатель темы
		darkLight();
		// если такой информации там нет — 
	} else {
		// сохраняем текущее значение темы
		localStorage.setItem('selected', dark);
	}
});