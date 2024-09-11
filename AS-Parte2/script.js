const tarefa = document.getElementById('tarefa')
const select = document.getElementById('select')
const data = new Date()




function adicionar() {
    const li = document.createElement('li')
    const pendentes = document.getElementById('pendentes')

    //Tarefas em branco, não serão aceitas
    if (tarefa.value == ''){
        alert("Campo em branco, adicione uma tarefa.")
        tarefa.value = ''
        tarefa.focus()
        li = 'none'
    }
    //Importância das tarefas
    li.innerText = tarefa.value
    if (select.value == 'alta') {
        li.style.backgroundColor = 'red'
    } else if (select.value == 'media') {

        li.style.backgroundColor = 'yellow'
    } else {

        li.style.backgroundColor = 'green'
    }

    //Criação da div
    const div = document.createElement('div')

    //Botão de excluir
    const btnExcluir = document.createElement('button')
    btnExcluir.innerText = 'Excluir'
    btnExcluir.addEventListener('click', function () {
        li.remove()
    })
    //Botão de comcluir
    const btnConcluir = document.createElement('button')
    btnConcluir.innerText = 'Concluir'
    btnConcluir.addEventListener('click', function () {
        li.remove()
        const concluidas = document.getElementById('concluidas')
        //Data e hora da conclusão da tarefa
        let minutos = data.getMinutes()
        
        if(minutos < 10){
            minutos = "0" + minutos
        }
        let horas = data.getHours()

        if(horas < 10){
            horas = "0" + horas
        }
        let dia = data.getDay()
        if(dia < 10){
            dia = "0" + dia
        }
        let mes = data.getMonth()
        if(mes < 10){
            mes = "0" + (mes + 1)
        }
        const span = document.createElement('span')
        span.classList.add('data')
        span.innerText = `Concluido em: ${dia} / ${mes } / ${data.getFullYear()} - ${horas}:${minutos}`    
        li.insertBefore(span, div)
        concluidas.appendChild(li)
        btnConcluir.innerText = ''

    })
    //Botoões e lista 
    div.appendChild(btnConcluir)
    div.appendChild(btnExcluir)
    li.appendChild(div)
    pendentes.appendChild(li)

    //add estilização do css para script
    btnConcluir.classList.add('btn')
    li.classList.add('list')
    btnExcluir.classList.add('btn')

}

