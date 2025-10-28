// Mostrar información al hacer clic en una edición
let ediciones = document.querySelectorAll(".edicion");

ediciones.forEach(function(edicion) {
  edicion.addEventListener("click", function() {
    let titulo = edicion.querySelector("h3").textContent;
    let texto = edicion.querySelector("p").textContent;
    alert(titulo + " - " + texto);
  });
});

// Contador regresivo al Mundial 2026
let contador = document.createElement("p");
document.querySelector(".proximo-mundial").appendChild(contador);

function actualizarContador() {
  let fechaMundial = new Date("June 14, 2026 00:00:00").getTime();
  let ahora = new Date().getTime();
  let diferencia = fechaMundial - ahora;

  if (diferencia < 0) {
    contador.textContent = "¡El Mundial 2026 ya comenzó!";
    return;
  }

  let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  contador.textContent = "Faltan " + dias + " días, " + horas + "h " + minutos + "m " + segundos + "s para el Mundial 2026";
}

setInterval(actualizarContador, 1000);
actualizarContador();


