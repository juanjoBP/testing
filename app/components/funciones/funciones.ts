/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */

/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */

/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */

/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */

/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */

/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */


/*
let Voca = ["a", "b", "c"]; 
let Number = [1, 2, 3];

let VocaNumber = Voca.concat(Number); 
console.log("VocaNumber : " + VocaNumber );
*/
let letter = ['h', 'a', 'c'];
let numbers = ['7', '4', '17', '10', '48'];

function arrayCombinator(listA, listB) {
 let juntarArreglos = listA.concat(listB);
 return juntarArreglos;
}
console.log(arrayCombinator(Array1,Array2));

//

let number = ['2','4','6','5','3','7'];
 let numerospares = [];
 let numerosimpares = [];
 
 const divisor = [numerospares, numerosimpares]
 for(let i= 0; i < number.length; i++) {
     if (number[i] % 2 === 0 ) {
         numerospares.push(number[i]);
     }else {
         numerosimpares.push(number[i]);
     }
 }

 console.log(divisor);

 //

 let grupo1 = ['e', 'd', 'f'];
 let grupo2 = ['a', 'c', 'b'];
 let grupo3 = ['g', 'h', 'i'];
 
 let organizar1 = grupo1.sort();
 let organizar2 = grupo2.sort();
 let organizar3 = grupo3.sort();
 
 function ordenAlfabetico (p) {
     return ordenar = p.sort((a,b) => { if (a < b) {
             return -1
         }else if (a > b){
             return 1
         }else{
             return 0
         }
     })
 }
 ordenAlfabetico(grupo1);
 ordenAlfabetico(grupo2);
 ordenAlfabetico(grupo3);

 let grupo4 = [grupo2,grupo1,grupo3]
 console.log(grupo4)
//

let arrai1 = ['pizza', 'perro', 'hamburguesa', 'nose', 'queso'];
 let arrai2 = ['hombre', 'pizza', 'perro', 'carne', 'nose', 'queso'];

function verificadorArray(a, b) {
   let combinar = [];
   for ( let i = 0; i < a.length; i++ ) {
       for ( let e = 0; e < b.length; e++ ) {
           if ( a[i] === b[e] ) combinar.push( a[i] );
       }
   }
   return combinar;
}

console.log(verificadorArray(arrai1, arrai2));

//

let arrei1 = ['1','2','3'];
let arrei2 = ['1','2','3'];

 function checkArrays(pri,sec){
	
    pri = pri.sort((a,b) => a-b);
    sec = sec.sort((a,b) => a-b);
        
    return pri.every((val,idx) => val === sec[idx]);
    }


console.log(checkArrays(arrei1, arrei2));

//

let testSampleList = ['b', '6', 'a', 'q', '7', '2'];

 function wordS(wordsList) {
    wordsList.sort()
    return wordsList;
 } 

console.log(wordS(testSampleList));
//

module.exports = funciones;

