//Boton GENERAL
const btn = document.getElementById("botonuno"); //Declara la variable y llama a boton
const txt = document.getElementById ("textouno");//variable - Texto detallado
btn.addEventListener('click', function(){ //click del boton y funcion
    txt.innerHTML = "<p>Cambia a lo general</p>";   
})

//Boton ESTUDIANTES
const btnDos = document.getElementById("botondos");
const txtDos = document.getElementById ("textodos");
btnDos.addEventListener('click', function(){ 
    txtDos.innerHTML = "<p>Cambia a la tabla</p>";   
}) 

 