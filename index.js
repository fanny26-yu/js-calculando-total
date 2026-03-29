

const precioSpan = document.querySelector(".precio-inicial");
let precio = 400000
precioSpan.innerHTML = precio

const cantidad1 = document.querySelector(".cantidad")
let cantidad = 0
cantidad1.innerHTML = cantidad


const btn1 = document.querySelector(".agregar") 
btn1.onclick = function () {
    cantidad = cantidad + 1
    cantidad1.innerHTML = cantidad
    actualizar()
   
    
}

const btn2 = document.querySelector(".restar")
btn2.onclick = function (){
    cantidad = cantidad - 1
    cantidad1.innerHTML = cantidad
    actualizar()
}

const total1 = document.querySelector(".valor-total")
function  actualizar () {
 let total = cantidad * precio
total1.innerHTML = total

}



