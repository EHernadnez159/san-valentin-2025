// Carrusel de fotos
const fotos = document.querySelectorAll('.carrusel img');
let indiceFotoActual = 0;

function cambiarFoto() {
  fotos[indiceFotoActual].classList.remove('foto-activa');
  indiceFotoActual = (indiceFotoActual + 1) % fotos.length;
  fotos[indiceFotoActual].classList.add('foto-activa');
}

setInterval(cambiarFoto, 3000); // Cambia la foto cada 3 segundos

// Countdown para el viaje
const fechaViaje = new Date('2025-04-04').getTime(); // Cambia la fecha según tu viaje

function actualizarCountdown() {
  const ahora = new Date().getTime();
  const diferencia = fechaViaje - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(actualizarCountdown, 1000); // Actualiza el contador cada segundo
actualizarCountdown(); // Inicializa el contador