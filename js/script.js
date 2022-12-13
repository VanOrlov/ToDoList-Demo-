let btn = document.querySelector('.addToDo')
let child = document.querySelector("li")
let ul = document.querySelector(".toDoList");
let inp = document.querySelector('.input-todo')

let array = []

btn.addEventListener('click', () => {
  if (inp.value){
    let item = {
      text: document.querySelector('.input-todo').value,
      id: Math.random()
    }
    array.push(item)
    console.log(array);
    addLi()
  }else{
    alert('Введите значение')
  }
})

function addLi(){
  let li = document.createElement("li");
  array.forEach(item => {
    li.innerHTML = item.text
    inp.value = ''
    li.onclick = () => remove(item.id, li)
    ul.appendChild(li);
  })
}

function remove(id, li){
  li.remove()
  array = array.filter(item => item.id !== id)
  console.log(array);
}