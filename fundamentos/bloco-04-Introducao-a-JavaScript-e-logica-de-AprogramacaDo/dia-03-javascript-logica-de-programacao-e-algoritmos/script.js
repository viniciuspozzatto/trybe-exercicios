//----------------------------------------------------------
//Exercicio 1

// let n = 10;
// let resultado = 1;

// for(let i=1;i<=n;i+=1){
//   resultado *= i
// }
// console.log(resultado);

//----------------------------------------------------------
//Exercicio 2

// const nome = 'trybe';
// let resultado = '';

// for (let i = nome.length -1; i >= 0; i --) {
//   resultado += nome[i];
// }
// console.log(resultado);

//----------------------------------------------------------
//Exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let resultado = array[0];

// for(let index = 1; index < array.length; index += 1){
//   if(resultado.length < array[index].length){
//     resultado = array[index];
//   }
// }
// console.log(resultado);

//----------------------------------------------------------
//Exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let resultado = array[0];

// for(let index = 1; index < array.length; index += 1){
//   if(resultado.length > array[index].length){
//     resultado = array[index];
//   }
// }
// console.log(resultado);

//----------------------------------------------------------
//Exercicio 4 Numeros primos?????????

let num = 50;
let result = [];

for (let index = 2; index < num; index += 1){
  if (index % num === 0){

    } else {
      result.push(index)
    }
  }    

console.log(result);


//----------------------------------------------------------
//Exercicio Bonus

// let n = 4;
// let linha = '';
// let asterisco = '*';

// for(let index=0; index<n; index+=1){
//     linha += asterisco;
// }
// for (let index=0; index<n; index+=1) {
//     console.log(linha)    
// }