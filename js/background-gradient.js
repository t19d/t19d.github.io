document.addEventListener("DOMContentLoaded", function () {
	function adjustBackgroundHeight() {
		// Obtener la altura del encabezado y el pie de página
		const headerHeight = document.querySelector("body > header").offsetHeight;
		const backgroundGradient = document.querySelector(".background-gradient");

		// Calcular la altura deseada para el .background-gradient
		const desiredHeight = window.innerHeight - headerHeight;

		// Establecer la altura y el top del .background-gradient
		backgroundGradient.style.height = desiredHeight + "px";
		backgroundGradient.style.top = headerHeight + "px";
	}

	// Llamar a la función de ajuste inicialmente
	adjustBackgroundHeight();

	// Escuchar cambios en el tamaño de la ventana
	window.addEventListener("resize", adjustBackgroundHeight);
});
