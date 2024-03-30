document.addEventListener("DOMContentLoaded", function () {
	const downloadCV = document.querySelector(".menu .download-cv");

	// Función para descargar el archivo PDF
	function descargarArchivoPDF() {
		const urlPDF = "/assets/files/David_Tojo_CV.pdf";
		const nombreArchivoPDF = "David_Tojo_CV.pdf";

		const enlaceDescargaPDF = document.createElement("a");
		enlaceDescargaPDF.href = urlPDF;
		enlaceDescargaPDF.download = nombreArchivoPDF;

		enlaceDescargaPDF.click();
	}

	downloadCV.addEventListener("click", () => {
		descargarArchivoPDF();
	});
});
