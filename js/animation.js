const imagen = document.getElementById("imagen");
const elemento1 = document.getElementById("elemento1")
const elemento2 = document.getElementById("elemento2")
const elemento3 = document.getElementById("elemento3")
const elemento4 = document.getElementById("elemento4")


window.addEventListener("scroll", () => {
  // Obtenemos el valor de Scroll
  let scrollY = window.scrollY;
  // Le damos el estilo translate 3d con el valor Scroll
  imagen.style.transform = `translate3d(0, ${scrollY * .5}px, 0)`;
});

//Creamos la constante cargarImage
const cargarImagen = (entradas, observador) => {
  //obtenemos la lista de entradas
  entradas.forEach((entrada) => {
    //Si la lista esta siendo intersectada 
    if(entrada.isIntersecting){
      //Se añadira la clase visible
      entrada.target.classList.add('visible');
    }else{ // Si no añadira oculto y quitara visible
      entrada.target.classList.add('oculto');
      entrada.target.classList.remove('visible');
    }
  })
};
// Creamos el observador
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  // Le decimos el % de la imagen para que se ejecute cargarImagen
  threshold: 0.2,
});

// Creamos el observador para el elemento
observador.observe(elemento2);
observador.observe(elemento3);
observador.observe(elemento4);
