function transf(value) {
    
    const number = Number(value);
    const numeroFormatado = number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    document.getElementById("formatado").innerHTML = "R$ " + numeroFormatado;
    
    return numeroFormatado;
}


transf(context.teste[0].ano)
