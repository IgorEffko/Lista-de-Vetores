
let vetor = [];
console.log(vetor);


function adicionar() {
    let valor = getInput();

    console.log(valor);

    addvetor(valor); 

    console.log(vetor); 

    imprimir();  

    limpar();
}

function getInput() {
    return document.getElementById("campo").value;
}

function addvetor(valor) {
    vetor[0] = valor;
    
}

function imprimir() {
    console.log("Chamou o método imprimir");

    const lista =  document.getElementById("lista");

    lista.innerHTML = vetor[0];
}

function limpar() {    
    document.getElementById('campo').value = '';
}