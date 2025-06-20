let meuArray = [];

function addItemArray() {
    let informacao = document.getElementById("item").value;

    if (informacao !== "") {
        meuArray.push(informacao);
        mostrarArray();
        document.getElementById("item").value = ""; 
    } else {
        alert("Digite um valor para adicionar.");
    }
}

function limparArray() {
    document.getElementById("item").value = "";
    document.getElementById("saida").innerText = "";
    meuArray = [];
}

function mostrarArray() {
    let div_saida = document.getElementById("saida");

    if (meuArray.length === 0) {
        div_saida.innerText = "O array está vazio.";
    } else {
        div_saida.innerText = "";
        for (let index = 0; index < meuArray.length; index++) {
            div_saida.innerText += `${meuArray[index]}\n`;
        }
    }
}