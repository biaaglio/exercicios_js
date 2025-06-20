    function exibirResultado() {
    var base = parseFloat(document.getElementById("e_base").value);
    var expoente = parseInt(document.getElementById("e_exp").value);

    var resultadoCalculo = calcularPotenciacao(base, expoente);

    var saidaDiv = document.getElementById("saida");
    saidaDiv.textContent = resultadoCalculo;
}
    function calcularPotenciacao(base, expoente) {
    var acc = base;
    var n_vezes = 1;
    var texto_saida = "";

    while (n_vezes < expoente) {
        texto_saida += acc + base + (acc * base) + "\n";
        acc = acc * base;
        n_vezes++;
    }
    return texto_saida;
}