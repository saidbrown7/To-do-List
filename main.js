let btnAdd = document.querySelector("#btn-add");
let todoList = document.querySelector("#todo-list");
let todoText = document.querySelector("#todo-textTyping");

btnAdd.addEventListener("click", function() {
  var paragraph = document.createElement("p");
  paragraph.innerText = todoText.value;
  paragraph.classList.add('paragraph-style')
  todoList.appendChild(paragraph);
  todoText.value = "";

  paragraph.addEventListener("click", ()=>{
      paragraph.style.textDecoration="line-through"
  })
  paragraph.addEventListener("dblclick", ()=>{
    todoList.removeChild(paragraph);
})
})

