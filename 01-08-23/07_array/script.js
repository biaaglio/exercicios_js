let frutas = [];

function addItemArray(){
    let item = document.getElementById("item").value;
    if(item) {
        frutas.unshift(item);
        mostrarSaida();
    }
}

function addItemFinal(){
    let item = document.getElementById("item").value;
    if(item) {
        frutas.push(item);
        mostrarSaida();
    }
}

function removeItemComeco(){
    frutas.shift();
    mostrarSaida();
}

function removeItemFinal(){
    frutas.pop();
    mostrarSaida();
}

function mostrarSaida() {
    document.getElementById("saida").innerHTML = frutas.join(", ");
}