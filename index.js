
document.getElementById("greeting").style.display='none'; //oculto div greeting
function getName(){ //Obtener nombre
    const name= document.getElementById('name'); //asigno lo que esta en el id =name a la variable = name
    
    
    document.getElementById("welcome").style.display='none'; //oculto div welcome

    document.getElementById("greeting").style.display='block'; //muestro div greeting
    document.getElementById("resultado").innerHTML = "Bienvenido (a) : "+ name.value; // obtendo el elemento que tenga el id= resultado y le envio el valor de name
}


document.getElementById("questionFilms").style.display='none';
function chooseFilms(){// si elige peliculas

    document.getElementById("questionFilms").style.display='block'; //muestro div questionfilms
    document.getElementById("greeting").style.display='none';
}


document.getElementById("questionFilms").style.display='none';
document.getElementById("questionBooks").style.display='none';
function chooseBooks(){ // si elige libros

    document.getElementById("questionBooks").style.display='block'; //muestro div questionsbooks
    document.getElementById("greeting").style.display='none';
    document.getElementById("questionFilms").style.display='none';
}

