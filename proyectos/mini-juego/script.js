function checkAnswer() {
    // Tomamos lo que escribió el usuario y lo pasamos a minúsculas para evitar errores
    const userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    const gameBox = document.getElementById("gameBox");
    const errorText = document.getElementById("errorMessage");

    // La respuesta correcta al acertijo del teclado
    const correctAnswer = "el teclado";

    if (userAnswer === correctAnswer || userAnswer === "teclado") {
        // Si gana, cambiamos todo el contenido de la caja por el premio
        gameBox.innerHTML = `
            <div class="prize-screen">
                <h1>🎉 ¡FELICIDADES, GANASTE! 🎉</h1>
                <p>Resolviste el acertijo como un profesional.</p>
                <div class="gift-emoji">🎁</div>
                <button class="prize-btn" onclick="alert('🏆 ¡Has reclamado un Ferrari falso! Disfrútalo en tus sueños.')">
                    Reclamar Premio Falso Here
                </button>
            </div>
        `;
    } else {
        // Si falla, mostramos un aviso en rojo
        errorText.innerText = "❌ Respuesta incorrecta. ¡Sigue intentando!";
    }
}
