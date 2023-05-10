const body = document.body; // переменная body

// Запрет перетаскивания ссылок и картинок
$("img, a").on("dragstart", function (event) {
	event.preventDefault();
});

// /* ------------------- btnScrollTop -------------------- */
const btnScrollTop = document.getElementById('btnScrollTop');

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btnScrollTop.classList.add('show')
	} else {
		btnScrollTop.classList.remove('show')
	}
}

btnScrollTop.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});