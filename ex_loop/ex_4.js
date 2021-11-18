// Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número perfeito é
// o que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve // exibir os
// divisores do número e a soma deles.
// Ex.:NUMERO: 28
// ---
// Divisores do 28: 1,2,4,7,14 (Soma:28)
// 28 É um número perfeito.




function validaNumPerfeito(){

    var n = numero.value
    var soma = 1
    var divisores = `Divisores do número ${n}: 1`


    if (numero.value == "" || numero.value <= 2) {
        alert("Digite um número maior que 2")
        
    }

    for (var ct = 2; ct < n; ct++) {
        if (n % ct == 0){
            divisores += `,${ct}`
            soma = soma + ct
            
        }
           
    }

    if (n == soma) {
        mostrar.innerHTML = `${divisores} (SOMA: ${soma}) <br>
        ${n} esse é um número perfeito`
    } else {
        mostrar.innerHTML = `${n} esse NÃO é um número perfeito`
    }






}




btnMostrar.addEventListener('click', validaNumPerfeito)
