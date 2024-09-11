const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const resultado = document.getElementById('resultado')


function somar() {
  if (numero1.value == '' || numero2.value == '') {
    alert('Digite um numero valido')
  }
  else {
    let soma = Number(numero1.value) + Number(numero2.value)
    resultado.innerText = 'Resultado: ' + soma
  }
}

function subtrair() {
  if (numero1.value == '' || numero2.value == '') {
    alert('Digite um numero valido')
  }
  else{
    let subtrair = Number(numero1.value) - Number(numero2.value)
    resultado.innerText = 'Resultado: ' + subtrair
  }
}
function multiplicar() {
  if (numero1.value == '' || numero2.value == '') {
    alert('Digite um numero valido')
  }
  else{
    let multiplicar = Number(numero1.value) * Number(numero2.value)
    resultado.innerText = 'Resultado: ' + multiplicar
  }
}
function dividir() {
  if (numero1.value == '' || numero2.value == '') {
    alert('Digite um numero valido')
  }
  else if(numero2.value == 0) {
    resultado.innerText = 'Resultado: ' + 'ERRO'
  }
  else{
    let dividir = Number(numero1.value) / Number(numero2.value)
    resultado.innerText = 'Resultado: ' + dividir
  }
}
function limpar(){
  numero1.value = ''
  numero2.value = ''
  resultado.innerText = 'Resultado: '
  
}
