document.addEventListener("DOMContentLoaded", function () {
	const menuToggleCheckbox = document.querySelector("#menu-toggle");
	const menuItems = document.querySelectorAll(".menu a");

	for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
		menuItem.addEventListener("click", function (event) {
			if (event.target.tagName === "A") {
				menuToggleCheckbox.checked = false;
			}
		});
	}
});
