const btAdd= document.querySelector('div.add-todo button')
const btTodo= document.querySelector('#todo button')
const btDoing= document.querySelector('#doing button')
const btDone= document.querySelector('#done button')
const inputTodo = document.querySelector('div.add-todo input')
const cartaoTodo = document.querySelector('#todo');
const cartaoDoing = document.querySelector('#doing');
const cartaoDone = document.querySelector('#done');

const criarItem = (atividade) => {
    const li = document.createElement('li')
    const button = document.createElement('button')
    const i = document.createElement('i')
    const texto = document.createTextNode(atividade);

    i.setAttribute('class','fas fa-chevron-circle-right');
    
    button.appendChild(i);
    li.append(texto,button);
    cartaoTodo.appendChild(li)
    button.onclick = () => todoForDoing(li, texto)
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

const todoForDoing = (lista,texto) =>{
    const li = document.createElement('li')
    const button = document.createElement('button')
    const i = document.createElement('i')

    i.setAttribute('class','fas fa-chevron-circle-right');
    
    button.appendChild(i);
    li.append(texto,button);
    cartaoDoing.appendChild(li)
    cartaoTodo.removeChild(lista)
    //button.onclick = () => doingForDone(li, texto)
}

btAdd.onclick = adicionarTodo