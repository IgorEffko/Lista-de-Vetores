
let vetor = [];
console.log(vetor);


function adicionar() {
    let valor = getInput();
    console.log(valor);
    addvetor(valor); 
    console.log(vetor); 
    imprimir();  
}

function getInput() {
    return document.getElementById("input").value;
}

function addvetor(valor) {
    vetor[0] = valor;
    
}

function imprimir() {
    document.getElementById("input").value = vetor[0];
}