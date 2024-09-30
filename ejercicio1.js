//Ejercicio 1: https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

function createMessage(palabra) {
  let palabras = [palabra];
  function concatenar(palabra){
    if (palabra === undefined) {
    return palabras.join(" ");
  } else {
    palabras.push(palabra);
    return concatenar;
  }
}
  return concatenar;
  }
