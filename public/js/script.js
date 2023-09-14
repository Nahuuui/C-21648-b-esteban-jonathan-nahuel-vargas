// Función para eliminar un post
function deletePost(postId) {
    fetch(`/delete/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            window.location.reload(); // Recarga la página después de eliminar el post
        } else {
            console.error('Error al eliminar el post');
        }
    })
    .catch(error => {
        console.error('Error al eliminar el post:', error);
    });
}

// Escuchar eventos de clic en botones de eliminación
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.getAttribute('data-post-id');
        deletePost(postId);
    });
});

