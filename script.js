function changeBackground() {
    const body = document.body;
    const cardSection = document.getElementById('card-section');

    // Aplicar transición al fondo y mostrar la carta después de la transición
    body.style.transition = 'background-color 1s ease, transform 1s ease';
    body.style.backgroundColor = '#222'; // Color gris oscuro
    body.style.transform = 'translateX(100%)'; // Deslizamiento hacia la derecha

    setTimeout(() => {
        cardSection.style.display = 'block';
    }, 1000); // Mostrar la carta después de 1 segundo
}
