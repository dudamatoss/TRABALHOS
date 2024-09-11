const nome = document.getElementById('nome')
const nota1 = document.getElementById('not1')
const nota2 = document.getElementById('not2')
const nota3 = document.getElementById('not3')
const resultado = document.getElementById('resultado')
const resultadoap = document.getElementById('resultadoap')
const mensagem = document.getElementById('mensagem')

function ap1() {
    if (nota1.value > 1.5 || nota1.value < 0) {
        alert('Digite nota válida')
        nota1.value = ''
    }
}
function ap2() {
    if (nota2.value > 2.5 || nota2.value < 0) {
        alert('Digite nota válida')
        nota2.value = ''
    }
}
function as() {
    if (nota3.value > 5 || nota3.value < 0) {
        alert('Digite nota válida')
        nota3.value = ''

    }
}


function media() {
    if (nota1.value == '' || nota2.value == '' || nota3.value == '') {
        mensagem.innerText = 'Nota faltante, digite todas as notas!'
    } else if (nome.value == '') {
        mensagem.innerText = 'Nome faltante, digite o nome do aluno(a)!'
    } else {
        mensagem.innerText = ''
    }

    let media = Number(nota1.value) + Number(nota2.value) + Number(nota3.value)
    resultado.innerText = 'Média : ' + media

    if (media >= 6) {

        resultadoap.innerText = 'Situção: ' + nome.value + ' sua nota é ' + media + '. Aprovado(a), parabéns!'
    }
    else {
        resultadoap.innerText = 'Situção: ' + nome.value + ' sua nota é ' + media + '. Reprovado(a). Reforce seus estudos para realização da AF. '

    }
}

