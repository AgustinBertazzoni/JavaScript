let links = document.querySelectorAll("nav a");

// Ejemplo de forIn, desmembrana la variable "links". primero va la nueva y segundo la que queres saber el valor
/*
      for (let link in links) {
        console.log(link);
      }
      */

// Funcion anonima:
links.forEach(function (link) {
  link.onclick = validarLink;
});

// Otra forma de hacerlo, es:
/*links.forEach(asignarEvento);

      function asignarEvento(link) {
        link.onclick = validarLink;
      }
      */

function validarLink(evento) {
  evento.preventDefault(); //<-- JS interrumpe el comportamiento predeterminado

  let rta = confirm(`Está seguro que desea ir al ${evento.target.innerText}?`);

  if (rta) {
    //ACA HAY QUE REPROGRAMAR QUE EL NAVEGADOR VAYA A DONDE DICE EL LINK CLICKEADO
    window.location.href = evento.target.href;
  }
}
