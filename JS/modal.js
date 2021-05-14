const cerrar = document.querySelectorAll(".close")[0];
const modal = document.querySelectorAll(".modal")[0];
const modalContain = document.querySelectorAll(".modal-container")[0];
const modalCerrar = document.querySelectorAll(".modal-close")[0];
const obtenerName = localStorage.getItem("nombreUsuario");


function abrirModal() {

    if (obtenerName === null) {
        modalContain.style.opacity = "1";
        modalContain.style.visibility = "visible";
        modal.style.transform = "translateY(0%)";
        
    }
}
abrirModal();



cerrar.addEventListener("click", function() {
    
    modalContain.style.opacity = "0";
    modalContain.style.visibility = "hidden";  
    modalCerrar.style.transform = "translateY(-200%)";
    
})