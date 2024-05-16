const playlistItems = document.querySelectorAll('.playlist-item');

// Agrega un evento de clic a cada elemento
playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        // Obtenemos el enlace de la playlist
        const playlistLink = item.querySelector('a').href;
        // Abre la playlist en una nueva ventana o pestaña
        window.open(playlistLink, '_blank');
    });
});