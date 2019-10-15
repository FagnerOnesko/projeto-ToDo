const btAdd= document.querySelector('div.add-todo button')
const btTodo= document.querySelector('h2.todo button')
const btDoing= document.querySelector('h2.doing button')
const btDone= document.querySelector('h2.done button')
const inputTodo = document.querySelector('div.add-todo input')
const listaTodo = document.querySelector('#todo');

const criarItem = (atividade) => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    const i = document.createElement('i')
    const texto = document.createTextNode(atividade);

    i.setAttribute('class','fas fa-chevron-circle-right');
    
    button.appendChild(i);
    li.append(texto,button);
    listaTodo.appendChild(li)
}

const adicionarTodo = () =>{
    if(inputTodo.value){
        criarItem(inputTodo.value)
        inputTodo.value=''
    }
    else{
        alert('Não pode ser vazio')
    }
}
btAdd.onclick = adicionarTodo