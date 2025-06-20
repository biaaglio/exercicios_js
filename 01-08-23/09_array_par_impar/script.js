let meuArray = [];
let pares = [];
let impares = [];

function addItemArray() {
    let input = document.getElementById("item").value.trim();
    let numero = parseInt(input);

    if (!isNaN(numero)) {
        meuArray.push(numero);

        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }

        document.getElementById("item").value = "";

        mostrarArray();

    } else {
        alert("Digite um número válido!");
    }
}

function limparArray() {
    meuArray = [];
    pares = [];
    impares = [];

    document.getElementById("item").value = "";
    document.getElementById("saida").innerText = "";
    document.getElementById("par").innerText = "";
    document.getElementById("impar").innerText = "";
}

function mostrarArray() {
    let div_saida = document.getElementById("saida");

    if (meuArray.length === 0) {
        div_saida.innerText = "Array vazio.";
    } else {
        div_saida.innerText = meuArray.join("\n");
    }
}

function mostrarPares() {
    let div_pares = document.getElementById("par");

    if (pares.length === 0) {
        div_pares.innerText = "Array vazio.";
    } else {
        div_pares.innerText = pares.join("\n");
    }
}

function mostrarImpares() {
    let div_impar = document.getElementById("impar");

    if (impares.length === 0) {
        div_impar.innerText = "Array vazio.";
    } else {
        div_impar.innerText = impares.join("\n");
    }
}
