function btn_onclick_Gerar() {
    let valorCompra = parseFloat(document.getElementById("compra").value);
    let numParcela = parseInt(document.getElementById("parcela").value);
    let valorParcela = valorCompra / numParcela;

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (var i = 1; i <= numParcela; i++) {
        let parcelaText =  + i + ": R$" + valorParcela.toFixed(2);
        let paragraph = document.createElement("p");
        paragraph.textContent = parcelaText;
        saida.appendChild(paragraph);
    }
}