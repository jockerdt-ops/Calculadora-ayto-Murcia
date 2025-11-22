// Función principal para cambiar de pantalla
function goToScreen(screenId) {
    // 1. Esconde todas las pantallas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // 2. Muestra la pantalla solicitada
    const targetScreen = document.getElementById('screen-' + screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // 3. Opcional: Desplazar arriba si el contenedor tiene mucho contenido
        const container = document.getElementById('app-container');
        if (container) {
            container.scrollTop = 0;
        }
    } else {
        // En caso de error, muestra un mensaje en la consola
        console.error("Error: No se encontró la pantalla con ID:", 'screen-' + screenId);
    }
}

// Inicializar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Aseguramos que la primera pantalla esté activa al cargar, por si el HTML falló
    goToScreen(1);
    console.log("Web SACA CUENTAS cargada y lista para navegación.");
});