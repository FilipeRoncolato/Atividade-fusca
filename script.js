// Função para calcular o tempo restante até 08/08/2025
function atualizarContador() {
    const dataLancamento = new Date("2025-08-08T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;

    if (diferenca <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    // Atualizar os elementos HTML
    document.getElementById("days").textContent = dias.toString().padStart(2, '0');
    document.getElementById("hours").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = segundos.toString().padStart(2, '0');
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);

// Executar imediatamente para evitar delay inicial
atualizarContador(); 