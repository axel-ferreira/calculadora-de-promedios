//1. preguntar cuantas son las notas
let n_notas = prompt("ingrese el numero de notas a promediar");
//2. transformamos el string a numero
n_notas = parseInt(n_notas);
//3. declaramos un array donde guardaremos las notas
let notas = [];
//4. validamos que usuarios ingresen al menos 2 notas para promediarlas
if (n_notas < 2) {
  alert("Debe ingresar al menos 2 notas");
} else {
  for (let i = 1; i <= n_notas; i++) {
    //5. agregamos las notas ingresadas al array
    notas.push(parseFloat(prompt("ingrese la nota")));
  }
}
//6. declaramos la funcion que manejará las variables para hacer los calculos
function promedio() {
  //7. sumamos las notas del array
  const sum = notas.reduce((prev, curr) => prev + curr, 0);
  //8. hacemos el calculo
  let promedio = sum / n_notas;
  //9. usamos el método toFixed para reducir el numero de decimales a 2
  promedio = promedio.toFixed(2);
  //10. mostramos el promedio al usuario
  alert("Su promedio de notas es: " + promedio);
}
//11. llamamos a la funcion
promedio();
