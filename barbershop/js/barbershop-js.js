var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event){
	event.preventDefault();
	console.log("поймал");
	popup.classList.add("modal-content-show");

	if (storage) {
		login.value = storage;
		password.focus();
	} else { login.focus()
	};
});

close.addEventListener("click", function(event){
	event.preventDefault();
	console.log("поймал закрытие");
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event){
	
	console.log("поймал отправление");
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
		console.log("Нужно ввести логин и пароль");
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});
window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classlist.remove("modal-error");
		}
	}
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event){
	event.preventDefault();
	console.log("нажата кнопка открытия карты");
	mapPopup.classList.add("modal-content-map-show");
});
mapClose.addEventListener("click", function(event){
	event.preventDefault();
	console.log("нажата кнопка закрытия карты");
	mapPopup.classList.remove("modal-content-map-show");

});
window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-map-show")) {
			mapPopup.classList.remove("modal-content-map-show");
		}
	}
})


