// TP1 - Control de Ruta Jael luna, roman adris


function limpiarPatente(texto) {
  if (texto === null) { 
    return "";
  }
  return texto.trim().toUpperCase();
}

function validarPatente(patente) {
  return patente.length >= 6 && patente.length <= 7;
}

let patente = "";
while (!validarPatente(patente)) {
  let entrada = prompt("Ingrese la patente del vehículo:");
  patente = limpiarPatente(entrada);
}

function pedirVelocidad() {
  let texto = "";
  let velocidad;
  while (true) {
    texto = prompt("Ingrese la velocidad en km/h:");
    if (texto === null || texto.trim() === "") {
      continue; 
    }
    velocidad = Number(texto);
    if (!isNaN(velocidad) && velocidad >= 0) {
      return velocidad;
    }
  }
}

let velocidad = pedirVelocidad();


function calcularMulta(velocidad) {
  if (velocidad <= 110) {
    return 0;
  } else if (velocidad <= 130) {
    return 5000;
  } else {
    return 10000;
  }
}

let multa = calcularMulta(velocidad);


console.log(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`);