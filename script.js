// Initializing all required selectors
const li = document.querySelectorAll('li');
const ul =document.querySelector('ul')
const addButton = document.querySelector('.addButton button')
const input = document.querySelector('.getinfo input')
let deleteButton = document.querySelectorAll('.delete')
const clearButton = document.querySelector('.clearTask')
const localStorage = window.localStorage
//Adding event listener for button
addButton.addEventListener('click', ()=>{
    let newdiv = document.createElement('div')
    let newli = document.createElement('li')
    let newbutton = document.createElement('button')
    newbutton.innerText = 'Finish'
    newbutton.classList.add('delete')
    newli.innerText = input.value
    newdiv.appendChild(newli)
    newdiv.appendChild(newbutton)
    ul.appendChild(newdiv)
    saveTodos(input.value)
    input.value = ''
    const current = document.querySelectorAll('.delete')
    deleteButton= current
    deleteButton.forEach(element => {
        element.addEventListener('click', ()=>{
            element.parentElement.style.display = "none"
            let todos
    if(localStorage.getItem("todos") == null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
        for(let i = 0; i<todos.length;i++ ){
            if(todos[i]==element.parentElement.firstChild.innerText){
                todos.pop(todos[i])
                localStorage.setItem("todos", JSON.stringify(todos))
            }
        }
    }
        

    })

})
})
clearButton.addEventListener('click', ()=>{
    for(let i =0; i<deleteButton.length; i++){
        deleteButton[i].parentElement.style.display ='none'
    
    }
    localStorage.clear()
})





//Local storage
function saveTodos(todo){
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function showTodos(){
    let todos;
    if(localStorage.getItem("todos") == null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(todo=>{
    let newdiv = document.createElement('div')
    let newli = document.createElement('li')
    let newbutton = document.createElement('button')
    newbutton.innerText = 'Finish'
    newbutton.classList.add('delete')
    newli.innerText = todo
    newdiv.appendChild(newli)
    newdiv.appendChild(newbutton)
    ul.appendChild(newdiv)
    const current = document.querySelectorAll('.delete')
    deleteButton= current
    deleteButton.forEach(element => {
        element.addEventListener('click', ()=>{
            element.parentElement.style.display = "none"
            let todos
    if(localStorage.getItem("todos") == null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
        for(let i = 0; i<todos.length;i++ ){
            if(todos[i]==element.parentElement.firstChild.innerText){
                todos.pop(todos[i])
                localStorage.setItem("todos", JSON.stringify(todos))
            }
        }
    }
        

    })

})
})
}

document.addEventListener('DOMContentLoaded', showTodos)