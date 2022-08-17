//Variables

var textoOriginal = document.getElementById("texto-original");
var imprimirResultado = document.getElementById("resultado");
var mensaje = document.getElementById("mensaje");
var muneco = document.getElementById("muneco");
var copiarTexto = document.getElementById("copiar-texto");
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");

//Botones

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
copiarTexto.onclick = copyText;

//Funciones

function imprimir(rectangulo) {
    muneco.style.display = "none";
    copiarTexto.style.display = "block";
    mensaje.style.display = "none";
}

function copyText() {
    var copy = imprimirResultado;
    var seleccion = document.createRange();
    seleccion.selectNodeContents(copy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand("copy");
    window.getSelection().removeRange(seleccion);
}

function encriptar(){
    imprimir();
    var areatexto = recuperTexto();
    imprimirResultado.textContent = encriptarTexto(areatexto);
}
function desencriptar(){
    imprimir();
    var areatexto= recuperTexto();
    imprimirResultado.textContent= desencriptarTexto(areatexto);
}

function recuperTexto() {
    var placeholder = document.querySelector("#texto-original");
    return placeholder.value;
}

function encriptarTexto(msj) {
    var escritoNuevo = msj;
    var nuevoTexto = "";

    for (var i = 0; i < escritoNuevo.length; i++) {
        if (escritoNuevo[i] == "a") {
            nuevoTexto = nuevoTexto+"ai";
        } 
        else if (escritoNuevo[i] == "e") {
            nuevoTexto = nuevoTexto+"enter";
        } 
        else if (escritoNuevo[i] == "i") {
            nuevoTexto = nuevoTexto+"imes";
        } 
        else if (escritoNuevo[i] == "o") {
            nuevoTexto = nuevoTexto+"ober";
        } 
        else if (escritoNuevo[i] == "u") {
            nuevoTexto = nuevoTexto+"ufat";
        } 
        else {
            nuevoTexto = nuevoTexto + escritoNuevo[i];
        }
    }
   return nuevoTexto;
}

function desencriptarTexto(mnsje){
    var texto = mnsje;
    var textoFinal= "";
    for(var i =0; i<texto.length; i++){
        if(texto[i]== "a"){
            textoFinal= textoFinal+"a";
            i=i+1;
        }
        else if(texto[i]== "e"){
            textoFinal= textoFinal+"e";
            i=i+4;
        }
        else if(texto[i]== "i"){
            textoFinal= textoFinal+"i";
            i=i+3;
        }
        else if(texto[i]== "o"){
            textoFinal= textoFinal+"o";
            i=i+3;
        }
        else if(texto[i]== "u"){
            textoFinal= textoFinal+"u";
            i=i+3;
        }
        else{
            textoFinal= textoFinal+texto[i];
        }
        
    }
    return textoFinal;
}