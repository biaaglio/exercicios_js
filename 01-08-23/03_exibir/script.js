    function exibirResultado() {
    let numeroA = parseInt(document.getElementById("numeroA").value);
    let numeroB = parseInt(document.getElementById("numeroB").value);

    if (numeroA > numeroB) {
        var temp = numeroA;
        numeroA = numeroB;
        numeroB = temp;
    }

    let saidaDiv = document.getElementById("saida");
    saidaDiv.innerHTML = "";

    for (let i = numeroA; i <= numeroB; i++) {
        saidaDiv.innerHTML += i + " ";
    }
}
