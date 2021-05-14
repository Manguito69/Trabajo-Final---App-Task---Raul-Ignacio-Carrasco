/*Seleccionar el evento*/

document.getElementById("formTask").addEventListener("submit", saveTask );

/*Esta función guarda tareas*/
function saveTask(e){
   let title = document.getElementById("title").value;
   let description = document.getElementById("description").value;
   
    const task = {
        title,
        description
    };

    /*En el primer parametro del metodo setItem, es el nombre de como vamos a nombrar a esos datos, y el valor de esos datos, es decir lo que voy a almacenar, será el objeto 'task' como segundo parametro */
    // localStorage.setItem("tasks", JSON.stringify(task));
    /*En la consola inspect(localStorage)*/
    if (localStorage.getItem("tasks") === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    /*Cada vez que yo almaceno una tarea voy a volver a ejecutar este metodo llamado gettasks*/
    getTasks();
    /*Para limpiar el formulario después de haber enviado la tarea, para que se reinicie.*/
    document.getElementById("formTask").reset();
    e.preventDefault();
}


/*Esta función lo que va a hacer es que una vez que tenga los datos, los va a comenzar a mostrar por pantalla*/
function getTasks() {
    /*Desde localstorage, quiero obtener las tareas "tasks, una vez las obtenga, voy a convertirlar en formato de JSON y la voy a almacenar en una constante llamada tasks" */
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    let tasksView = document.getElementById("tasks");

    /*Vamos a limpiarlo en caso de que ya existan nuevos datos*/
    tasksView.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        tasksView.innerHTML += `<div class="card cardjs">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">
                    Delete
                </a>
            </div>
        </div>`
    }
}

/*Esta función va a eliminar tareas*/
/*Esta función será la encargada de obtener un title y eliminarlo, entonces vamos a tener como parametro de la función "title"*/ 
function deleteTask(title) {
    /*Ahora vamos a recorrer nuestrar tareas, para buscar si coinciden el titulo que queremos eliminar con alguna tarea almacenada en el localStorage, y si coincide vamos a eliminarla*/
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }
    /*Aquí, cuando terminemos de quitar la tarea, aquí vamos a guardar nuevamente los datos, para mostrar los elementos que quedaron allí y no fueron borrados.*/
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
}

getTasks();





/*******LEER MÁS - LEER MENOS*******/

//con esta funcion mostramos el contenido faltante del ultimo parrafo 
function muestra(){
    var elemento = document.getElementById("adicional"),
        elemento2 = document.getElementById("leerMenos");
    
    elemento.className="visible";
    elemento2.className="visible";
    
    var enlace = document.getElementById("enlace");
    enlace.className="oculto";  
    
};

function ocultarSpan() {
    var leerMenos = document.getElementById("adicional"),
        elemento2 = document.getElementById("leerMenos");
    
        leerMenos.className="oculto";
        elemento2.className="oculto";
    
    var enlace = document.getElementById("enlace");
    enlace.className="visible"; 
}