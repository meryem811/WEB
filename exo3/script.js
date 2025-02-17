
let addtodo = document.getElementById("addtodobtn");
let todoList = document.getElementById("todolist");

function addTodo() {
    let Name = document.getElementById("Name");
    let Content = document.getElementById("Content");

    if (Name.value==""||Content.value=="") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    let l = document.createElement("div");
    l.className = "d-flex justify-content-between align-items-center";
    let text= document.createElement("div");
    text.className = "col";
    text.textContent = Name.value+" : "+Content.value;
    
    let btn = document.createElement("button");
    btn.className = "  btn btn-danger";
    btn.textContent = " 🗑️";
    btn.style.backgroundColor = "red";
    
   l.appendChild(text);
   l.appendChild(btn);

    todoList.appendChild(l);
    btn.addEventListener("click", function()
      {todoList.removeChild(l);} )
    Name.value = "";
    Content.value = "";

    
}

addtodo.addEventListener("click", addTodo);