let countdownInterval = null;

export function counter() {
    if (countdownInterval) return;

    let totalSegundos = 20 * 60;
    const countdownEls = document.querySelectorAll('[data-target="countdown"]');

    function atualizarTimer() {
        const minutos = Math.floor(totalSegundos / 60);
        const segundos = totalSegundos % 60;
        const formatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        countdownEls.forEach(el => {
            el.textContent = formatado;
        });

        if (totalSegundos === 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }

        totalSegundos--;
    }
    
    console.log('[counter] Countdown encontrados:', countdownEls.length);

    atualizarTimer();
    countdownInterval = setInterval(atualizarTimer, 1000);
}
