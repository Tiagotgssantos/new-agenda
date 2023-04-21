var form =document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    var input = document.querySelector("input");
    var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(input.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    exibirTarefas(tarefas);
    input.value = "";
});


function exibirTarefas(tarefas) {
    var ul = document.querySelector("ul");
    ul.innerHTML = "";
    for (var i = 0; i < tarefas.length; i++) {
        var li = document.createElement("li");
        var lixeira = '<i class="fa-regular fa-trash-can"></i>';
        li.innerText = tarefas[i];
        var dataSpan = document.createElement("span");
        dataSpan.innerText = new Date().toLocaleDateString();
        li.appendChild(dataSpan);
        var button = document.createElement("button");
        button.innerHTML = lixeira;
        button.classList.add("btn-lixeira");
        button.setAttribute("data-index", i);
        button.addEventListener("click", function() {
            var index = this.getAttribute("data-index");
            tarefas.splice(index, 1);
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
            exibirTarefas(tarefas);
        });
        li.appendChild(button);
        ul.appendChild(li);
    }
}


var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
exibirTarefas(tarefas);