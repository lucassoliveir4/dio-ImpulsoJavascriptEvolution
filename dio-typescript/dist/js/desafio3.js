"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let novoSaldo = 0;
function somaDeSaldo(soma) {
    if (campoSaldo) {
        novoSaldo = novoSaldo + soma;
        campoSaldo.innerHTML = novoSaldo.toString();
        clean();
    }
}
function limpaSaldo() {
    if (campoSaldo) {
        novoSaldo = 0;
        campoSaldo.innerHTML = novoSaldo.toString();
        clean();
    }
}
function clean() {
    soma.value = "";
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somaDeSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limpaSaldo();
    });
}
