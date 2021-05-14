/*Obtener nombre y guardarlo en el localStorage*/

function obtenerNombre() {

    const nombre = document.getElementById("tuNombre").value;
    localStorage.setItem("nombreUsuario", nombre);
    const obtenerName = localStorage.getItem("nombreUsuario");
    
    // document.getElementById("tuNombre").style= "display: none";
    // document.getElementById("botonEnviar").style = "display: none";
    document.getElementById("cambiarNombre").style = "display: block";
    
    document.getElementById("welcome").innerHTML= "Dar el primer paso es difícil, pero es así como se crean los nuevos caminos. Así que " + "<b>" + obtenerName + "</b>" + ", da tu primer paso <b>ahora</b>. No importa que no veas el camino completo. Sólo <b>da tu primer paso</b> y el resto irá apareciendo a medida que camines.";
}
    
/*Si en el localStorage no hay nombre, quiero mostrar algo*/   

function sinNombre() {
    const obtenerName = localStorage.getItem("nombreUsuario");
    // console.log(obtenerName);
    if (obtenerName === null) {
        document.getElementById("welcome").innerHTML = "Empieza por ingresar tu nombre para continuar"; 
    /*Lo que está acá abajo es una copia casi exacta de lo que está arriba, sucede que al recargar la página, los input vuelven a aparecer y el mensaje desaparece, así que tuve que copiarlo y pegaro aquí para que no sucediera nada raro, a exepción del mensaje. Me hubiera gustado no tener que repetir, pero no encontré una manera en que no tuviera que hacerlo.*/
    } else {
        document.getElementById("welcome").innerHTML="Mejor poco y bien que mucho y mal, no " + "<b>" + obtenerName + "</b>" + "? No podemos con todo, es una realidad que debemos asumir. En ocasiones nos ponemos demasiadas metas en un sólo día y dejamos pasar detalles por alto. Al final, acabas con más trabajo y perdiendo el tiempo que pensabas ahorrarte. Es mejor elegir pocas tareas y hacerlas bien."; 

        // document.getElementById("tuNombre").style= "display: none";
        // document.getElementById("botonEnviar").style = "display: none";  
        document.getElementById("cambiarNombre").style = "display: block";
    }
}
sinNombre();


/*Botón para cambiar nombre*/
const boton = document.getElementById("cambiarNombre");

boton.addEventListener("click", function() {
    // document.getElementById("tuNombre").style= "display: block";
    // document.getElementById("botonEnviar").style = "display: block";

    /*Acá cuando se haga click en "Cambiar nombre", volverá a aparecer la ventana del modal*/  
    modalContain.style.opacity = "1";
    modalContain.style.visibility = "visible";
    modal.style.transform = "translateY(0%)";
    document.getElementById("cambiarNombre").style = "display: none";  

    /*Acá, lo que hacemos es que cuando se quiera cambiar el nombre, el usuario pueda cancear la acción oprimiendo fuera del modal*/
    window.addEventListener("click", function(event) {
        console.log(event.target);
        if(event.target == modalContain) {
            modal.classList.toggle("modal-close");
            modalContain.style.opacity = "0";
            modalContain.style.visibility = "hidden";
            modal.style.transform = "translateY(-200%)";
            document.getElementById("cambiarNombre").style = "display: block";    
        }
    })
});





