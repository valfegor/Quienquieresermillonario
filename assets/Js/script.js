let preguntas2 = [
  {
    pregunta: "Instrucción que permite almacenar un valor en una variable.",
    opcion: ["A.Leer", "B.Asignar", "C.Escribir", "D.Si / entonces"],
    respuesta: 2,
    tip: "No lo se viejo me estoy llamando llama despues"
  },
  {
    pregunta: "¿Para qué sirve git diff?",
    opcion: ["A.Lleva a cabo una función para establecer las diferencias en los orígenes de datos de Git. ", "B.Para revisar cuáles archivos se encuentran en el staged.", "Para inicializar un proyecto git.", "Git diff no es un comando de git."],
    respuesta: 1,
    tip: "No lo se viejo me estoy llamando llama despues"
  },
  {
    pregunta: "¿ Que es bootstrap?",
    opcion: ["A. Biblioteca de herramientas ", "B. Pagina web ", "C. commando de HTML ", "D. Una organizacion "],
    respuesta: 1,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Un bucle es una estructura:",
    opcion: ["A.Repetitiva", "B. Secuencial", "C. Condicional", "D.iterativa"],
    respuesta: 1,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Hay un terremoto, necesitas guardar la informacion",
    opcion: ["A. git (fetch pull commit)", "B. git (add log commit)", "C. git (push commit pull)", "D. git (add commit push)"],
    respuesta: 4,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Tipo de dato que permite almacenar cadenas de texto:",
    opcion: ["A.int", "B.string", "C.char", "D.Java"],
    respuesta: 2,
    tip:"Viejo creo que se transforma en el que tiene una lengua larga pero no estoy seguro",
  },
  {
    pregunta: "¿Cómo puedo visualizar las ramas remotas en git?",
    opcion: ["A.Git branch -r", "B.Git branch", "C.Git branch origin remote", "D.Git checkout branch remote"],
    respuesta: 1,
    tip:"Viejo creo que se transforma en el que tiene una lengua larga pero no estoy seguro",
  },
  {
    pregunta: "¿Que hace un Scrum master?",
    opcion: ["A. Hace cumplir todo el ciclo SCRUM, ", "B. Se Encarga de las reuniones ", "C. Apoya a los otros miembros ", "D. Todas las anteriores"],
    respuesta: 4,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Instrucción que permite emplear condiciones en un código de JavaScript:",
    opcion: ["A.I am inevitable", "si(condición){}", "C.if(condición){}", "D.while(condición){}"],
    respuesta: 3,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Comando usado para para mostrar información sobre cualquier objeto git.",
    opcion: ["A.git stash", "B.git log", "C.git show", "D.git config --global"],
    respuesta: 3,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Las etapas que deben seguirse en la construcción de un programa son:",
    opcion: ["A.Análisis, algoritmo, diagrama de flujo, seudocódigo", "B.Análisis, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación).", "C.Análisis, algoritmo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo.", "D.Análisis, algoritmo, diagrama de flujo, seudocódigo, prueba de escritorio, implementación (codificar en un lenguaje de programación), prueba, instalación y uso del aplicativo"],
    respuesta: 4,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "En caso de presentarse una falla de sintaxis, en el proceso de programación, se procede a:",
    opcion: ["A.Ignorar los errores y ejecutar el programa.", "B.Comprender el mensaje de error que reporta el ambiente de programación, examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla, probar el programa de nuevo.", "C.Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, Comprender el mensaje de error que reporta el ambiente de programación.", "D.Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla."],
    respuesta: 3,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Comando empleado para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.",
    opcion: ["A.git stash pop", "B.git rebase", "C.git status", "D.git pull"],
    respuesta: 4,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
  {
    pregunta: "Git es un sistema de control de versiones distribuido que fue creado por Linus Torvalds en el año:",
    opcion: ["A.2000", "B.2005", "C.2015", "D.1995"],
    respuesta: 2,
    tip: "Viejo ese resident evil no lo jugue , pero creo que eran mas fuertes"
  },
];

let preguntas = preguntas2.sort(function(){
  return 0.8 - Math.random();
});

let repetir3 = true;
let repetir2 = true;
let index = 0;
let puntaje = 0;
let intento = 0;
let mal = 0;
let repetir = true;
let puntos = document.getElementById("cajapuntos");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let cajatiempo = document.getElementById("cajatiempo");
let titulopreg = document.getElementById("titulo");
let opcion = document.querySelectorAll(".opcion");
let boton = document.getElementById("siguiente");
let cincuenta = document.getElementById("cincuenta");
let cajadinero = document.getElementById("cajadinero");
let llamada = document.getElementById("llamada");
let display = document.getElementById("preguntaScreen");
let display2 = document.getElementById("respuestaScreen");
let finalizar = document.getElementById("finalizar");
let preguntastotales = document.getElementById("preguntastotales");
let acumulado = document.getElementById("dinero");
let correctiyo = document.getElementById("correctiyo");
let correcto = document.getElementById("right ");
let wrong = document.getElementById("mal");
console.log(correcto);
let dinero = 0;
let a = 1;

function imprimirpreguntas(i) {
  
  span1.innerHTML = preguntas[i].opcion[0];
  span2.innerHTML = preguntas[i].opcion[1];
  span3.innerHTML = preguntas[i].opcion[2];
  span4.innerHTML = preguntas[i].opcion[3];
  titulopreg.innerHTML = preguntas[i].pregunta;
  
}

imprimirpreguntas(index);

opcion.forEach(function (opcion) {
  opcion.addEventListener("click", () => {
    validar(opcion);
  });
});

boton.onclick = function () {
  siguiente(opcion);


}






function siguiente(opcion) {
  
  if (index >= (preguntas.length-4)) {
    mostrarResultado();
  }
  while (a < index) {
    return alert("no puede");
  }

  repetir = true;
  imprimirpreguntas(index);
  opcion.forEach(function (opcion) {
    opcion.classList.remove('correcto');
    opcion.classList.remove('incorrecto');
  });

}


function validar(opcion) {


  op1 = opcion.dataset.opt;




  while (repetir) {

    if (op1 == preguntas[index].respuesta) {
      alert("esa es la respuesta correcta");
      puntaje++;
      dinero = dinero + 10000;
      opcion.classList.add('correcto');
      puntos.innerHTML = puntaje;
      cajadinero.innerHTML = dinero;
      repetir = false;
      intento++;
      index++;
      a++;

      console.log(op1);
      break;
    }
    else if (op1 != preguntas[index].respuesta) {
      mal++;
      opcion.classList.add('incorrecto');
      repetir = false;
      intento++;
      index++;
      a++;
      alert(`lo sentimos ha seleccionado una respuesta erronea su dinero ganado es de $0 y su puntaje es de ${puntaje}`);
      mostrarResultado2();
      break;
    }


  }
  span1.style.display = 'block';
  span2.style.display = 'block';
  span3.style.display = 'block';
  span4.style.display = 'block';





}

function temporizador() {
  let tiempo = 200;
  let min = 0;
  let seg = 0;
  let contador = 0;
  let timer = setInterval(function () {
    contador++;
    min = Math.floor((tiempo - contador) / 60);
    seg = tiempo - min * 60 - contador;
    cajatiempo.innerHTML = `${min} : ${seg}`
  }, 1000);

  if (contador == tiempo) mostrarResultado();;


}

temporizador();

cincuenta.addEventListener('click', () => {
  botoncincuenta();


});


function botoncincuenta(opcion) {



  while (repetir2) {
    span1.dataset.opt;
    span2.dataset.opt;
    span3.dataset.opt;
    span4.dataset.opt;



    if (span1.classList.contains("correcto") || span2.classList.contains("correcto") || span3.classList.contains("correcto") || span4.classList.contains("correcto")) return alert("UPS parece que un zombie te ha mordido , no puedes pedir el comodin pues ya tienes una opcion correcta");

    if (span1.dataset.opt == preguntas[index].respuesta) {
      span2.style.display = 'none';
      span3.style.display = 'none';
      repetir2 = false;
      break;
    }
    else if (span2.dataset.opt == preguntas[index].respuesta) {
      span1.style.display = 'none';
      span4.style.display = 'none';
      repetir2 = false;
      break;

    }
    else if (span3.dataset.opt == preguntas[index].respuesta) {
      span1.style.display = 'none';
      span2.style.display = 'none';
      repetir2 = false;
      break;
    }
    else if (span4.dataset.opt == preguntas[index].respuesta) {
      span2.style.display = 'none';
      span3.style.display = 'none';
      repetir2 = false;
      break;
    }





  }
  alert("Ha usado su comodin mi amigo , ya no podra utilizarlo nuevamente");


}

llamada.addEventListener('click', () => {

  while (repetir3) repetir3 = false, alert(preguntas[index].tip);

});


finalizar.addEventListener('click', () => {

  let seguro = prompt("Esta seguro que desea retirarse? , digite si para confirmar , de lo contrario cierre o pulse cualquier otra tecla para continuar");
  seguro.toLowerCase();

  while (seguro == "si" ||seguro == "SI" ) {
    mostrarResultado();
  }

  return;

});




function mostrarResultado() {

  display.style.display = 'none';
  display2.style.display = 'block';

  preguntastotales.innerHTML = intento;
  acumulado.innerHTML = `Felicidades Obtuviste $${dinero}`;
  correctiyo.innerHTML = `lo lograste en ${puntaje} intentos sigue asi!`;
  correcto.innerHTML = `Tuviste un total de ${puntaje} respuestas correctas`;


}


function mostrarResultado2(){
  display.style.display = 'none';
  display2.style.display = 'block';

  preguntastotales.innerHTML = intento;
  acumulado.innerHTML = `Lo sentimos perdiste todo el dinero te vas con $ 0`;
  correctiyo.innerHTML = `perdiste al intento ${puntaje} , puedes esforzarte`;
  
}