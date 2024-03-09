let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1)? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        } else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = "";
}

function generarNumeroScreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroScreto();
    } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroScreto();
    intentos= 1;
}

function reiniciarJuego(){
     //limpiar caja
     limpiarCaja();
     //Indicar mensaje de intervalo de números 
     //Generar el número aleatorio
     //Inicializar el número intentos
     condicionesIniciales();
     //Deshabilitar el botón de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
