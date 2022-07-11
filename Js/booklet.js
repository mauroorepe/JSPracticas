//CLASE 1


// Booklet 1


/* let name = "Homero";
let surname = "Simpson";
let age = 36;
console.log(name);
console.log(surname);
console.log(age); */


// Booklet 2


/* const springfield = "Springfield";
const buenosAires = "Buenos Aires";
const villaBallester = "Villa Ballester";
const chilavert = "Chilavert";
const bariloche = "Bariloche";
console.log(springfield);
console.log(buenosAires);
console.log(villaBallester);
console.log(chilavert); 
console.log(bariloche); */


//Booklet 3 


/* let serialNumber = "B47U89RE243";
let nombreYApellido = "Bart Simpson";
let direccion = "742 Evergreen Terr.";
let ciudad = "Springfield, USA";
let cumpleaños = "02/11/70";
let sexo = "masculino";
let carnet =    "Codigo: "+serialNumber+"" +
                "Nombre: "+nombreYApellido+""+
                "Direccion: "+direccion+""+
                "Ciudad: "+ciudad+"" +
                "Fecha de Nac.: "+cumpleaños+"" +
                "Sexo: "+sexo+"";
console.log(carnet); */


// \n es un enter/salto de linea


//Booklet 4



/* let nombre1 = prompt("Ingrese su nombre");
let nombre2 = prompt("Ingrese el nombre de su madre");
let nombre3 = prompt("Ingrese el nombre de su padre");
let nombre4 = prompt("ingrese el nombre de su primer hijo");
let nombre5 = prompt("ingrese el nombre de su mascota");
alert ("Nombre: "+nombre1+"" + "Madre: "+nombre2+"" + "Padre: "+nombre3+"" + "Hijo:"+nombre4+"" + "Mascota:"+nombre5+"");
 */


//Booklet 5


/* let precio1 = parseInt(prompt("Introduzca un numero"));
let precio2 = parseInt(prompt("Introduzca un numero"));
let descuento1= precio1 - (0.2*precio1)
let descuento2= precio2 - (0.15*precio2)
alert ("Luego de un descuento del 20% el precio queda en $"+descuento1)
alert ("Luego de un descuento del 20% el precio queda en $"+descuento2)
console.log(descuento1)
console.log(descuento2)
 */

//Bloque de comentarios con shift+alt+a
//Comentario de linea ctrl+k+c

//CLASE 2


//Booklet 1

/* let nombreGuardado = "Mauro"
let nombre = prompt("ingrese su nombre")

if(nombre==nombreGuardado){
    alert( "Fui yo")
}else{
    alert("Yo no fui")
} */

//Booklet 2

/* let teclaIngresada = prompt("Presione la tecla 'Y'")

if((teclaIngresada=="y")||(teclaIngresada=="Y")){
    alert("Correcto")
}else{
    alert("Error")
} */

//Booklet 3

/* 
let numero = prompt("Elija un numero del 1 al 4")

if(numero==1){
    alert("Elegiste a Homero")
}else if (numero==2){
    alert("Elegiste a Marge")
}else if (numero==3){
    alert("Elegiste a Bart")
}else if(numero==4){
    alert("Elegiste a Lisa")
}else{
    alert("Elija un numero del 1 al 4")
} */


//Booklet 4

/* let numero= parseFloat(prompt("Indique su presupuesto"))

if(numero<=1000){
    alert("Presupuesto Bajo")
}else if(numero<=3000){
    alert("Presupuesto Medio")
}else if(numero>3000){
    alert("Presupuesto Alto")
}else{
    alert("Error")
} */


//Booklet 5

/* let almacen1 = prompt("Escriba un producto");
let almacen2 = prompt("Escriba un producto");
let almacen3 = prompt("Escriba un producto");
let almacen4 = prompt("Escriba un producto");

if((almacen1 != "")&&(almacen2 != "")&&(almacen3 != "")&&(almacen4 != "")){
    alert("Elegiste "+almacen1+" "+almacen2+" "+almacen3+" "+almacen4)
} */


//Clase 3

//Booklet 1

/* let numero = prompt("Ingrese la cantidad de repeticiones deseadas")
let texto = prompt("Ingrese el texto que desee repetir")

for(let i=1; i<=numero; i++ ){
    alert(i+"- "+texto)
} */


//Booklet 2 


/* let numero = prompt("Ingrese un numero")

for(let i=0; i<numero; i++){
    if(i>3){
        break
    }
    alert("Lado "+(i+1))
} */


//Booklet 3


/* let alumnos = ""

for(let i=0; i<10; i++){
    alumnos += prompt("Ingresar el nombre del alumno")+"\n "
}
alert(alumnos) */

//Booklet 4


/* let entrada = prompt("Ingresar nombre")
let nombre = ""

while(entrada != "Voldemort"){
    entrada = prompt("Ingresar nombre")
    nombre += entrada + "\n "
    
}
alert(nombre) */


//Booklet 5


let numero = prompt("Ingrese un numero")
let listaCompras = ""
let item = ""
while(numero != "ESC"){
    numero = prompt("Ingrese un numero")
    if(numero==1){
        item="Tomate"
    }else if(numero==2){
        item= "Papa"
    }else if(numero==3){
        item= "Carne"
    }else if (numero==4){
        item= "Pollo"
    }else{
        alert("Error, ingrese un numero del 1 al 4")
    }
    listaCompras += numero + " "+item + "\n "
}
alert(listaCompras)