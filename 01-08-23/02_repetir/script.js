function btn_onclick_atribuir_texto() {
    var inputTexto = document.getElementById("texto").value;
    var inputVezes = parseInt(document.getElementById("vezes").value);

    var resultadoRepeticao = repetirTexto(inputTexto, inputVezes);

    console.log(resultadoRepeticao);

    var saidaDiv = document.getElementById("saida");
    saidaDiv.textContent = resultadoRepeticao;
}

function repetirTexto(texto, vezes) {
    var resultado = "";
    for (var i = 0; i < vezes; i++) {
        resultado += texto + "\n";
    }
    return resultado;
}
