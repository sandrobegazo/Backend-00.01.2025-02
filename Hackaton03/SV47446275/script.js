function ejercicio1() {
    /*Hacer un algoritmo en JavaScript que lea un número por el teclado 
      y determinar si tiene tres dígitos.
      */
  
    const dato = parseInt(prompt("inserte un dato"));
  
    if (!dato) {
      alert("error ingrese un numero");
    } else {
      if (dato > 99 && dato < 1000) {
        alert("el numero tiene tres digitos");
        console.log("el numero tiene tres digitos");
      } else {
        alert("el numero no tiene tres digitos");
        console.log("el numero no tiene tres digitos");
      }
    }
  }
  
  function ejercicio4() {
    /*4. Hacer un algoritmo en JavaScript que lea tres 
  números enteros y los muestre de menor a mayor.
  */
    let num1, num2, num3, menor, medio, mayor;
  
    num1 = partInt(prompt("ingrese un numero"));
    num2 = 54;
    num3 = 3;
  
    if (num1 <= num2 && num1 <= num3) {
      menor = num1;
      if (num2 <= num3) {
        medio = num2;
        mayor = num3;
      } else {
        medio = num3;
        mayor = num2;
      }
    } else {
      if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
          medio = num1;
          mayor = num3;
        } else {
          medio = num3;
          mayor = num1;
        }
      } else {
        menor = num3;
        if (num1 < num2) {
          medio = num1;
          mayor = num2;
        } else {
          medio = num2;
          mayor = num1;
        }
      }
    }
  
    //mostrar en pantalla numeros ordenados
  
    console.log(
      `Numeros ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`
    );
  }
  
  function ejercicio5() {
    //Hacer un algoritmo en JavaScript para una tienda de zapatos
    // que tiene una promoción de descuento para
    //vender al mayor, esta dependerá del número de zapatos
    //que se compren. Si son más de diez, se les dará un 10%
    //de descuento sobre el total de la compra; si el número de
    //zapatos es mayor de veinte pero menor de treinta, se le otorga un 20%
    //de descuento; y si son más treinta zapatos se otorgará un 40% de
    //descuento. El precio de cada zapato es de $80.
  
    let cantidadZapatos, totalPagar, totalOriginal, descuento;
    const precio = 80;
  
    descuento = 0;
    cantidadZapatos = 24;
  
    totalOriginal = cantidadZapatos * precio;
    totalPagar = cantidadZapatos * precio;
  
    //Si son más de diez, se les dará un 10%
    //de descuento sobre el total de la compra;
  
    if (cantidadZapatos >= 10 && cantidadZapatos < 20) {
      descuento = totalOriginal * 0.1;
      totalPagar = totalOriginal - descuento;
    } else {
      if (cantidadZapatos >= 20 && cantidadZapatos < 30) {
        descuento = totalOriginal * 0.2;
        totalPagar = totalOriginal - descuento;
      } else {
        if (cantidadZapatos >= 30) {
          descuento = totalOriginal * 0.4;
          totalPagar = totalOriginal - descuento;
        }
      }
    }
  
    console.log(
      `Cantidad comprada: ${cantidadZapatos}  Total original: ${totalOriginal}`
    );
    console.log(`Descuento: ${descuento} Total a pagar:  ${totalPagar}`);
  }
  
  function ejercicio13() {
    console.log("==========ejercicio 13=================");
    //Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
    let letra = "A";
  
    switch (letra.toLocaleLowerCase()) {
      case "a":
        console.log("si es una vocal");
        break;
      case "e":
        console.log("si es una vocal");
        break;
      case "i":
        console.log("si es una vocal");
        break;
      case "o":
        console.log("si es una vocal");
        break;
      case "u":
        console.log("si es una vocal");
        break;
      default:
        console.log("No es una vocal");
    }
  }
  
  function ejercicio14() {
    ////14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez
    // y determine si es un número primo.
    console.log("==========ejercicio 14=================");
  
    let esPrimo = false;
    //	Escribir  'Ingrese un numero entero entre el 1 y el 10';
    let num = 4390;
    if (num < 1 || num > 10) {
      console.log("Error: El numero debe de estar entre 1 y 10");
    } else {
      if (num == 2 || num == 3 || num == 5 || num == 7) {
        esPrimo = true;
      }
  
      if (esPrimo == true) {
        console.log(num, "es un numero primo");
      } else {
        console.log(num, "No es un numero primo");
      }
    }
  
    // = asignar valor
    // == comprar
    //  === comprar pero tambien el tipo de dato
  }

// hola mundo 