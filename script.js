let todos = [];
        let count = 0;
        function addTodo(){
            todos.push({
                title: document.querySelector("input").value
            })
            render()
            count++;
        }

        function render(){
            const divEl = document.createElement("div")
            const spanEl = document.createElement("div");
            const buttonEl = document.createElement("button")

            divEl.className = "task-container";

            buttonEl.innerHTML = "X"
            buttonEl.id = "deleteButton";
            
            spanEl.innerHTML = todos[count].title;
            spanEl.id = "todoList"

            buttonEl.addEventListener("click", function(){
                divEl.remove();
                todos.splice(count, 1);
            })

            divEl.style.display = "flex"
            divEl.style.justifyContent = "center"; 

            divEl.appendChild(spanEl)
            divEl.appendChild(buttonEl)

            document.querySelector("body").appendChild(divEl)
        }