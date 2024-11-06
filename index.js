// Taxa de câmbio fixa (exemplo: R$ 1 = US$ 0.20)
const taxaCambio = 0.20;

// Função converte real para dolar
function converterParaDolar() {
    const valorReal = parseFloat(document.getElementById('valorReal').value);
    
    if (!isNaN(valorReal) && valorReal > 0) {
        const valorDolar = valorReal * taxaCambio;
        document.getElementById('resultado').textContent = 
            `R$ ${valorReal.toFixed(2)} equivale a US$ ${valorDolar.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 
            'Por favor, insira um valor válido em Real.';
    }
}