let meuArray = [];

function addItemArray() {
    let informacao = document.getElementById("item").value;
    if (informacao !== "") {
        meuArray.push(informacao);
        mostrarArrayCompleto();
        document.getElementById("item").value = ""; 
    }
}

function limparArray() {
    document.getElementById("item").value = "";
    document.getElementById("saida").innerText = "";
    meuArray = [];
}

function mostrarArrayCompleto() {
    let div_saida = document.getElementById("saida");
    if (meuArray.length === 0) {
        div_saida.innerText = "O array está vazio.";
    } else {
        div_saida.innerText = meuArray.join(", ");
    }
}


