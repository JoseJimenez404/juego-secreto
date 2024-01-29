/* function verificarNumeroMayor(numeroUno, numeroDos) {
	if(numeroUno === numeroDos){
		console.log("Ninguno es mayor, son numeros iguales");
	}
	(numeroUno > numeroDos) ? console.log("El numero mayor es :") + numeroUno : console.log("El numero mayor es " + numeroDos);
}

verificarNumeroMayor(5,9); */


// ---------------------------------------------------------------------------
// EJERCICIO 1
/* Crea una funcion que calcule el indice de masa corporal (IMC)
de una persona a partir de su altura en metros y peso en kilogramos
que se recibiran como parametros */


//-- paso 1: IMC: dividiendo el peso (kg) entre la altura (m^2)
// pedir su nombre
//pedir su peso
//pedir su altura
//calcular su IMC
//devolver mensaje con su IMC

/* let nombre = prompt("Porfavor, dinos cual es tu nombre");
let peso = parseFloat(prompt("cual es tu peso ?"));
let altura = parseFloat(prompt("cual es tu altura"));
 */


/* function calcularImc(peso,altura) {

	//isNan verifica si es no es un numero, retorna true si no es numero, y retorna false si lo es.
	if(isNaN(peso) || isNaN(altura)){
		return "Porfavor, ingresa valores numericos"
	}
	//calcular el indice de masa corporal, math pow sirve para elevar un numero al cuadrado.
	let indiceDeMasaCorporal = peso / Math.pow(altura, 2);
 	return indiceDeMasaCorporal;
}

let resultado = calcularImc(peso,altura); */

//typeof sirve para validar el tipo de dato que se le pasa, con toFixed, redondeamos el imc a dos decimales, para mayor claridad, sirve para definir cuantas decimales mostramos
/* if (typeof resultado === 'number') {
	alert(`${nombre}, tu índice de masa corporal es: ${resultado.toFixed(2)}`);
  } else {
	alert(resultado);
  } */

//-----------------------------------------------------------------------------
//EJERCICIO 2
//crea una funcion que calcule el factorial de un numero


/* function calcularFactorial(numero) {
	if(!isNaN(numero) && numero >= 0){
		if(numero === 0 || numero === 1){
			return 1;
		}else{
			return numero * calcularFactorial(numero - 1);
		}

	}else{
		return "para calcular un factorial necesitamos que los valores sean numeros y sean positivos "
	}
}

console.log(calcularFactorial(5)); // Ejemplo: calcular el factorial de 5 */

//---------------------------------------------------------------------------
//EJERCICIO 3:

//crea una funcion que convierta un valor en dolares, pasado como parametro, y devuelve el valor quivalente en mx, la cotizacion del dolar es de 17.15
/* 
function convertirDolaresAMX(valorEnDolares) {
	const cotizacionDolar = 17.15;
  
	if (isNaN(valorEnDolares) || valorEnDolares < 0) {
	  return "Por favor, ingresa un valor válido en dólares.";
	}
  
	const equivalenteEnMX = valorEnDolares * cotizacionDolar;
  
	// Utilizar plantillas de cadena (template literals) para una presentación más clara
	return `El equivalente de $${valorEnDolares.toFixed(2)} dólares es $${equivalenteEnMX.toFixed(2)} pesos mexicanos.`;
  }
  
  // Ejemplo de uso
  const valorEnDolares = 50;
  const resultadoConversion = convertirDolaresAMX(valorEnDolares);
  console.log(resultadoConversion); */



//-----------------------------------------------------------------------------
//EJERCICIO 4

//crea una funcion que muestre en pantalla la tabla de multiplicar de un numero dado como parametro:



function tablaMultiplicar(numero) {
	for(let i = 1; i <= 10 ; i++){
		console.log(`${numero} x ${i} = ${numero * i}`);
	}
}

const numeroParaTabla = 7;
tablaMultiplicar(numeroParaTabla);
  
