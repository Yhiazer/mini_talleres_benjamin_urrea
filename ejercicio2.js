//Ejercicio 2: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
  let solucion = [];
  
  if (str.length % 2 !== 0) {
    str += '_';
  }

  for (let i = 0; i < str.length; i += 2) {
    solucion.push(str[i] + str[i + 1]);
  }

  return solucion;
}
