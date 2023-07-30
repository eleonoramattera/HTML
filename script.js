const text = "HyperText Markup Language";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Imposta il ritardo tra i caratteri (in millisecondi)
  } else {
    // Ripeti l'effetto dopo un breve ritardo (ad esempio, 1 secondo)
    setTimeout(() => {
      typewriterElement.innerHTML = ""; // Resetta il testo per ricominciare dall'inizio
      index = 0; // Resetta l'indice
      typeWriter(); // Richiama la funzione per iniziare nuovamente l'effetto
    }, 1000); // Imposta il ritardo tra una ripetizione e l'altra (in millisecondi)
  }
}

// Avvia l'effetto di scrittura automatica al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
