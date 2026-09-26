function checkAnswer() {
    // Tomamos lo que escribió el usuario y lo pasamos a minúsculas para evitar errores
    const userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    const gameBox = document.getElementById("gameBox");
    const errorText = document.getElementById("errorMessage");

    // La respuesta correcta al acertijo del teclado
    const correctAnswer = "el espejo";

    if (userAnswer === correctAnswer || userAnswer === "el espejo") {
        // Si gana, cambiamos todo el contenido de la caja por el premio
        gameBox.innerHTML = `
            <div class="prize-screen">
                <h1>🎉 ¡FELICIDADES, GANASTE! 🎉</h1>
                <p>Resolviste el acertijo como un profesional.</p>
                <div class="gift-emoji">🎁</div>
                
            </div>
        `;
    } else {
        // Si falla, mostramos un aviso en rojo
        errorText.innerText = "❌ Respuesta incorrecta. ¡Sigue intentando!";
    }
}
