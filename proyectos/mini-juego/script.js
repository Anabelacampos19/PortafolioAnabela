function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    const errorText = document.getElementById("errorMessage");

    const correctAnswer = "el espejo";

    if (userAnswer === correctAnswer || userAnswer === "espejo") {
        // 🌟 GUARDAMOS ELÉXITO: Guardamos que el acertijo ya fue resuelto
        localStorage.setItem("acertijoCompletado", "true");

        // Mostramos el mensaje de éxito y un botón para volver a la galería a ver su premio
        document.getElementById("gameBox").innerHTML = `
            <div class="prize-screen">
                <h1>🎉 ¡ACERTADO! 🎉</h1>
                <p>Excelente lógica. Has desbloqueado el siguiente proyecto en mi galería.</p>
                <div class="gift-emoji">🔓</div>
                <a href="../index.html" class="unlock-btn" style="
                    display: inline-block;
                    background-color: #50fa7b;
                    color: #11111b;
                    padding: 12px 24px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: bold;
                    margin-top: 15px;
                ">
                    Ver Proyecto Desbloqueado →
                </a>
            </div>
        `;
    } else {
        errorText.innerText = "❌ Respuesta incorrecta. ¡Refleja bien tu respuesta!";
    }
}
