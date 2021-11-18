//  Elaborar um programa que leia o nome de uma ferramenta e um número (quantidade de vezes que ele
//  vai repetir).O programa deve repetir a exibição do nome da ferramentade acordo com o numero
//  informado. Utilizeo carácter | para separar os nomes.
//  Ex.:
//  FERRAMENTA: Martelo
//  NÚMERO DE VEZES: 4
//  ---
//  Martelo | Martelo | Martelo | Martelo |





show.addEventListener('click', function() {

    for ( i = 0; i < qtd.value; i++) {
      mostrar.innerHTML += `${ferramenta.value} | `;
    }
  })
  