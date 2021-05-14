/*********************MODO DARK*********************/

var content = document.getElementsByTagName("body")[0];
var darkMode = document.getElementById("dark-change");

darkMode.addEventListener("click", function() {
    darkMode.classList.toggle("active"); 
    content.classList.toggle("night");


    /*Si en este caso, nuestro body, tiene la clase de "night", entocnes agregamos el valor verdadero........*/
    if (document.body.classList.contains("night")) {
        localStorage.setItem("darkNoche", "true");

        /*.......pero si no tiene la clase de "night", lo que voy a hacer es guardar el valor de  false.*/
    } else {
        localStorage.setItem("darkNoche", "false");

        /*Con esto ya tenemos el valor guardado en el Local Storage*/
    }
});


if (localStorage.getItem("darkNoche") === "true" ) {
    /*Si es verdadero significa que el usuario se encontraba en el modo oscuro, por lo tanto, se tiene que cambiar la clase del body, para activar el modo oscuro*/
    document.body.classList.add("night");
    darkMode.classList.add("active"); 

} else {
    document.body.classList.remove("night");
    darkMode.classList.remove("active"); 
}

