// Reportes y Estadisticas - Funcionalidad de exportacion

document.addEventListener('DOMContentLoaded', function() {
    const btnExportarCSV = document.getElementById('btnExportarCSV');
    const btnGenerarPDF = document.getElementById('btnGenerarPDF');

    if (btnExportarCSV) {
        btnExportarCSV.addEventListener('click', function() {
            alert('Exportando reporte a CSV...');
            // Aqui va la logica para generar y descargar el CSV
        });
    }

    if (btnGenerarPDF) {
        btnGenerarPDF.addEventListener('click', function() {
            alert('Generando reporte en PDF...');
            // Aqui va la logica para generar y descargar el PDF
        });
    }
});
