document.addEventListener("DOMContentLoaded", function () {
	let menu = document.querySelector("body > header.menu");

	function toggleMenuShadow() {
		// Comprobar si menu tiene la clase scrolled
		let hasScrolled = menu.classList.contains("scrolled");

		if (window.scrollY > 5) {
			if (!hasScrolled) menu.classList.add("scrolled");
		} else if (hasScrolled) {
			menu.classList.remove("scrolled");
		}
	}

	toggleMenuShadow();

	window.addEventListener("scroll", toggleMenuShadow);
});
