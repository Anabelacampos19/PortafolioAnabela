function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase().trim();
    const errorText = document.getElementById("errorMessage");

    const correctAnswer = "espejo";

            if (userAnswer === correctAnswer || userAnswer === "espejo") {
        // Guardamos el éxito usando window de forma global para la sesión actual
        window.sessionStorage.setItem("acertijoCompletado", "true");

        // Cambiamos la pantalla por la de éxito
        document.getElementById("gameBox").innerHTML = `
            <div class="prize-screen">
                <h1>🎉 ¡ACERTADO! 🎉</h1>
                <p>Excelente lógica. Has desbloqueado el siguiente proyecto en mi galería.</p>
                <div class="gift-emoji">🔓</div>
                <!-- Botón corregido que redirige limpiamente hacia atrás -->
                <button onclick="window.location.href='../index.html'" style="
                    display: inline-block;
                    background-color: #50fa7b;
                    color: #11111b;
                    padding: 12px 24px;
                    border-radius: 8px;
                    border: none;
                    font-weight: bold;
                    margin-top: 15px;
                    cursor: pointer;
                ">
                    Ver Proyecto Desbloqueado →
                </button>
            </div>
        `;
    }

     else {
        errorText.innerText = "❌ Respuesta incorrecta. ¡Refleja bien tu respuesta!";
    }
}
