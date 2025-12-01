
let vetor = [];
console.log(vetor);

const CAMPO = "campo";

function adicionar() {
    let valor = getInput();

    console.log(valor);

    addvetor(valor); 

    console.log(vetor); 

    imprimir();  

    limpar();

    setcursor();

    imprimirnatela();

    
}

function getInput() {
    return document.getElementById( CAMPO ).value;
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
    document.getElementById( CAMPO ).value = '';
}

function setcursor() {
    document.getElementById( CAMPO ).focus();
}

function imprimirnatela() {
     const lista =  document.getElementById("lista");
    console.log("===================================");
    console,log("lista")
    console.log("===================================");


}