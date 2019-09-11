
   document.getElementById("greeting").style.display='none';

function getName(){
    const name= document.getElementById('name'); //asigno lo que esta en el id =name a la variable = name
    
    
    document.getElementById("welcome").style.display='none';

    document.getElementById("greeting").style.display='block'; 
    document.getElementById("resultado").innerHTML = "Bienvenido (a) : "+name.value;
}




