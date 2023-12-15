var ctx;
var canvas;
var palabra;
var letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
var colorTeclas = "black"
var colorMargen = "lightgray";
var inicioX = 200;
var inicioY = 300;
var lon = 35;
var margen = 20;
var teclas_array = new Array();
var palabra_array = new Array();
var aciertos = 0;
var errores = 0;

//palabras para juego

palabras_array.push("LEÓN");
palabras_array.push("CABALLO");
palabras_array.push("PERRO");
palabras_array.push("GATO");
palabras_array.push("LAGARTIJA");
palabras_array.push("RINOCERONTE");
palabras_array.push("TIBURÓN");
palabras_array.push("CARACOL");
palabras_array.push("ALACRÁN");
palabras_array.push("ARAÑA");
palabras_array.push("CHAPULIN");
palabras_array.push("AVESTRUZ");
palabras_array.push("OCELOTE");
palabras_array.push("CANGURO");
palabras_array.push("ÁGUILA");
palabras_array.push("MUERCIÉLAGO");

function Tecla(x, y, ancho, alto, letra){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.letra = letra;
    this.dibuja = dibujaTecla;
}

function Letra(x, y, ancho, alto, letra){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.letra = letra;
    this.dibuja = dibujaCajaLetra;
    this.dibujaLetra = dibujaLetraLetra;
}

function dibujaTecla(){
    ctx.fillStyle = colorTecla;
    ctx.strokeStyle = colorMargen;
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
    
    ctx.fillStyle = "white";
    ctx.font = "bold 20px courier";
    ctx.fillText(this.letra, this.x+this.ancho/2-5, this.y+this.alto/2+5);
}

function dibujaLetraLetra(){
    var w = this.ancho;
    var h = this.alto;
    ctx.fillStyle = "black";
    ctx.font = "bold 40px Courier";
    ctx.fillText(this.letra, this.x+w/2-12, this.y+h/2+14);
}

function dibujaCajaLetra(){
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);
}

window.onload = function() {
    canvas = document.getElementById("screen");
    if (canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
        if(ctx){
            teclado();
            pintaPalabra();
            horca(errores);
            canvas.addEventListener("click", selecciona, false);
        } else {
            alert ("Error al cargar el contexto!");
        }
    }
}