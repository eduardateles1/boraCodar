// @ts-nocheck
/*const primeiroNome = prompt('Informe o primeiro nome: ')
const sobrenome = prompt('Informe o sobrenoome: ');
const campoEstudo = prompt('Qua o campo de estudo do aluno ?');
const anoNascimento= prompt("Qual o ano de nascimento ?");

alert(`Aluno cadastrado com sucesso ! nome ${primeiroNome}, sobrenome ${sobrenome}, campo de estudo ${campoEstudo} idade ${anoNascimento} `);
*/
/*let entrada1= prompt('Informe o primeiro número: ');
let entrada2 = prompt('Informe o segundo número:');

// @ts-ignore
let x = parseFloat(entrada1)
// @ts-ignore
let y =parseFloat(entrada2)

let soma = x + y
let subt = x - y
let div = x / y
let mult = x * y

alert(`soma${soma} subtração ${subt} divisão ${div} multiplicação ${mult}`)
*/
/*const car1 = prompt('Informe o nome do primeiro carro: ')
const vel1 = prompt('Informe a velocidae do carro')

const car2 = prompt('Informe o nome do primeiro carro: ')
const vel2 = prompt('Informe a velocidae do carro')

//Estruturas Condicionais
if(vel1 > vel2){
    alert(`O carro ${car1} é mais rápido que o ${car2}`)
} else if (vel2 > vel1){
    alert(`O veicúlo ${car2} é mais rápido que o ${car1}`)
} else{
    alert(`O ${car1} e o ${car2} possuem velocidade iguais`)
}
*/

//Switch Case
/*const medida = prompt('Insira uma medida: ')

const unidade = prompt(
    'Para qual unidade de medida deseja converter? ' +
    '\n1. Milimetro (mm)' +
    '\n2. Centímetro (mm)' +
    '\n3. Decímetros (mm)' +
    '\n4. Decâmetros (mm)' +
    '\n5. Hectômetros(mm)' +
    '\n6. Quilometros (mm)'
)

switch (unidade) {
    case '1':
        alert(`Resultado ${medida} m ${medida * 1000} mm`)
        break
    case '2':
        alert(`Resultado ${medida} m ${medida * 100} cm`)
        break
    case '3':
        alert(`Resultado ${medida} m ${medida * 10} dc`)
        break
    case '4':
        alert(`Resultado ${medida} m ${medida / 10} dm`)
        break
    case '5':
        alert(`Resultado ${medida} m ${medida / 100} hm`)
        break
    case '6':
        alert(`Resultado ${medida} m ${medida / 1000} km`)
        break
    default:
        alert('Opção Inválida')

}
*/

//Estrutura de repetições while/loop do while
//  let turista = prompt('Insira seu nome: ')
//  let cidades= ''
//  let cont = 0

//  let continuar = prompt('Você visitou alguma cidade (sim/não)? ')

//  while(continuar === 'sim'){
//      let cidade = prompt('Qual o nome da cidade ?')
//      cidades += ' - ' + cidade +  ' ' 
//      cont++
//      continuar = prompt('Você visitou outra cidade (sim/não)? ')

//      alert(`Turista ${turista} quantidade de cidades visitadas ${cont} cidades visitadas ${cidades}`);

//  }
//  let velocidade = 0
//  do{
//     alert(`A  velocidade do veículo é ${velocidade} km/h`)
//     velocidade -= 20
//  } while (velocidade > 0)
//  alert(`A velocidade do carro é ${velocidade} km/h`)
 
//  const cont =0
//  const opcoes = prompt(
//     'Qual Opção você deseja escolher? ' +
//     '\n1. Pizza' +
//     '\n2. Salada' +
//     '\n3. Hamburguer' +
//     '\n4. Frango' +
//     '\n5. Suco'
//  );
//  do{

//  }while (opcoes !=='5')

//  switch(opcoes){
//     case '1':
//     alert(`Você escolheu a opção 1 `)
//     break
//     case '2':
//     alert(`Você escolheu a opção 2 `)
//     break
//     case '3':
//     alert(`Você escolheu a opção  3` )
//     break
//     case '4':
//     alert(`Você escolheu a opção 4`)
//     break
//     case '5':
//         alert('Você escolheu encerrar')
//     break
//     default:
//         alert('Opção inválida')
//  }

const numeroBase = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
  const resultado = numeroBase * i;
  alert(`${numeroBase} x ${i} = ${resultado}`);
}
