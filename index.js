
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

document.getElementById("questiontwo").style.display='none';
document.getElementById("questionthree").style.display='none';
document.getElementById("btn-score").style.display='none';

document.getElementById("answer1-1").onclick=skipQuestionOne;
document.getElementById("answer2-1").onclick=skipQuestionTwo;
document.getElementById("answer3-1").onclick=skipQuestionThree;
//let answerend;
function skipQuestionOne(){//------------------------

    const answerone=document.getElementById("answer1-1").value;
    console.log(answerone);
   // answerend=answerone;
    document.getElementById("questionone").style.display='none';
    document.getElementById("questiontwo").style.display='block';
  //  return answerend;
}

function skipQuestionTwo(){//------------------------
     
    const answertwo=document.getElementById("answer2-1").value;
    console.log(answertwo);
    //answerend=answertwo;
    document.getElementById("questionone").style.display='none';
    document.getElementById("questiontwo").style.display='block';
   // return answerend;
}

function skipQuestionThree(){//------------------------

    const answerthree=document.getElementById("answer3-1").value;
    console.log(answerthree);
    //answerend=answerthree;
    document.getElementById("questionone").style.display='none';
    document.getElementById("questiontwo").style.display='block';
 //   return answerend;
}


//******************************************************************** */
document.getElementById("answer1-2").onclick=skipOptionOne2;
document.getElementById("answer2-2").onclick=skipOptionTwo2;
document.getElementById("answer3-2").onclick=skipOptionThree2;


function skipOptionOne2(){//------------------------

    const answerone2=document.getElementById("answer1-2").value;
    console.log(answerone2);
   // answerend=answerone2;
    document.getElementById("questiontwo").style.display='none';
    document.getElementById("questionthree").style.display='block';
    
    //return answerend;
}

function skipOptionTwo2(){//------------------------
     
    const answertwo2=document.getElementById("answer2-2").value;
    console.log(answertwo2);
   // answerend=answertwo2;
    
    document.getElementById("questiontwo").style.display='none';
    document.getElementById("questionthree").style.display='block';
    
  //  return answerend;
}


function skipOptionThree2(){//------------------------

    const answerthree2=document.getElementById("answer3-2").value;
    console.log(answerthree2);
  //  answerend=answerthree2;
    document.getElementById("questiontwo").style.display='none';
    document.getElementById("questionthree").style.display='block';
    
  //  return answerend;
}

//******************************************************************** */


document.getElementById("answer1-3").onclick=skipOptionOne3;
document.getElementById("answer2-3").onclick=skipOptionTwo3;
document.getElementById("answer3-3").onclick=skipOptionThree3;


function skipOptionOne3(){//------------------------

    const answerone3=document.getElementById("answer1-3").value;
    console.log(answerone3);
   // answerend1=answerone3;
    document.getElementById("questionthree").style.display='none';
    document.getElementById("btn-score").style.display='block';
    
   // return answerend1;
}

function skipOptionTwo3(){//------------------------
     
    const answertwo3=document.getElementById("answer2-3").value;
    console.log(answertwo3);
   // answerend2=answertwo3;
    
    document.getElementById("questionthree").style.display='none';
    document.getElementById("btn-score").style.display='block';
    
   // return answerend2;
}


function skipOptionThree3(){//------------------------

    const answerthree3=document.getElementById("answer3-3").value;
    console.log(answerthree3);
  //  answerend3=answerthree3;
    document.getElementById("questionthree").style.display='none';
    document.getElementById("btn-score").style.display='block';
    
   // return answerend3;
}



//******************************************************************** */
    


document.getElementById("btn-score").style.display='none';
function showResult(){
    
    document.getElementById("btn-score").style.display='block';
    
 }
        
        
      

    




  

  