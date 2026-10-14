
// aca veo si la variable edad es mayor o igual a 18
const edad = 20;

if (edad >= 18) {
    console.log("es mayor de edad");
} else {
    console.log("es menor de edad");
}

// en esta parte verifico si la variable es par o impar
const numero = 4;

if (numero % 2 === 0) {
    console.log("el número es par");
} else {
    console.log("el número es impar");
}

// aca compruebo las notas segun lo que sacaron,si es menor a 4 reprobado
//si es mayor o igual a 7 aprobado y nota excelente 

const nota = 8;

if (nota < 4) {
    console.log("reprobado");
} else if (nota >= 4 && nota <= 7) {
    console.log("aprobado");
} else {
    console.log("excelente");
}

// aca imprimo los números del 1 al 10 usando un bucle for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
