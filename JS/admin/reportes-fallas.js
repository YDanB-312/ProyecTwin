// Reportes de Fallas - Funcionalidad de filtros

document.addEventListener('DOMContentLoaded', function() {
    const btnFiltrar = document.getElementById('btnFiltrar');
    const btnLimpiar = document.getElementById('btnLimpiar');

    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', function() {
            const estado = document.getElementById('filtroEstado').value;
            const fecha = document.getElementById('filtroFecha').value;
            const usuario = document.getElementById('filtroUsuario').value;
            alert('Filtrando por:\nEstado: ' + (estado || 'Todos') + '\nFecha: ' + (fecha || 'Todas') + '\nUsuario: ' + (usuario || 'Todos'));
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function() {
            document.getElementById('filtroEstado').value = '';
            document.getElementById('filtroFecha').value = '';
            document.getElementById('filtroUsuario').value = '';
        });
    }
});
