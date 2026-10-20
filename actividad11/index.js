//1 (a
//function saludar(){
    //console.log(`Hola,bienvenido`);
//}
//saludar();

//1 (b)
//function saludarPersona(){
    //console.log(`Hola Alex,Bienvenido`)
//}

//saludarPersona("alex")

//1 (c
//function esMayorDeEdad(edad) {
    //if (edad >= 18) {
        //return true;
    //} else {
        //return false;
    //}
//}
//let resultadoEdad = esMayorDeEdad(20)
//console.log("¿es mayor de edad?", resultadoEdad)

//funciones de flecha//

//2 (a
const esMayorDeEdadFlecha = (edad) =>{
    return edad >= 18
}
console.log("¿es mayor de edad?", esMayorDeEdadFlecha(15))

 
// 2.b)
const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log("el número" + num1 + "es menor que" + num2);
    } else if (num1 === num2) {
        console.log("el número" + num1 + "es igual que" + num2);
    } else {
        console.log("el número" + num1 + "es mayor que" + num2);
    }
};

// Uso de la función dentro de un bucle (pasando el iterador y el número 3)
for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}



   //3) funciones callbacks

// declaración de las funciones de suma y resta callbacks
const suma = (a, b) => {
    let resultado = a + b;
    console.log("el resultado de la suma es" + resultado);
    return resultado;
};

const resta = (a, b) => {
    let resultado = a - b;
    console.log("el resultado de la resta es" + resultado);
    return resultado;
};

// función principal que la operacion que recibe los dos números y el callback
const operacion = (num1, num2, callback) => {
    return callback(num1, num2);
};

// Pruebas de funcionamiento con callbacks
operacion(15, 5, suma);   
operacion(15, 5, resta);