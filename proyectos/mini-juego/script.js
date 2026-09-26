function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    const errorText = document.getElementById("errorMessage");

    const correctAnswer = "el espejo";

        if (userAnswer === correctAnswer || userAnswer === "espejo") {
        // 🌟 CAMBIO AQUÍ: Guardamos el éxito solo para esta sesión actual
        sessionStorage.setItem("acertijoCompletado", "true");

        // Mostramos el mensaje de éxito (Tu código de pantalla de premio sigue igual)
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
    }
     else {
        errorText.innerText = "❌ Respuesta incorrecta. ¡Refleja bien tu respuesta!";
    }
}
