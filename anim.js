// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Darkchild, I like that", time: 5.5 },
  { text: "Oh, oh, oh", time: 11 },
  { text: "My life ", time: 20 },
  { text: "will never be the same", time: 22 },
  { text: "'Cause girl you came and changed", time: 24 },
  { text: "The way I walk", time: 26 },
  { text: "The way I walk", time: 27 },
  { text: "I cannot explain", time: 29 },
  { text: "These things I feel for you", time: 32 },
  { text: "But girl, you know it's true", time: 34 },
  { text: "Stay with me", time: 36 },
  { text: "Fulfill my dreams", time: 38 },
  { text: "Feels so right ", time: 42 },
  { text: "(girl)", time: 43 },
  { text: "I've searched for the perfect love all my life", time: 45 },
  { text: "(All my life)", time: 48 },
 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3 
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
