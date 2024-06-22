const interna = document.querySelectorAll('.interna img');

function trocaImagem ( ) {
  const trocou = document.querySelector('#prinxipal');
  const troca = event.currentTarget;
  trocou.src = troca.src;
  trocou.alt = troca.alt
}

function clicou ( imagem ) {
  imagem.addEventListener('click', trocaImagem);
}

interna.forEach( clicou );

// ------------imagem 02---------------

const galeria = document.querySelectorAll('interna-02 img');

function truque( ) {
  const clicki = document.querySelector('#prinxipal');
  const trocar = event.currentTarget;
  clicki.src = trocar.src;
  clicki.alt = trocar.alt;
}

function galerea (imagenx) {
  imagenx.addEventListener('click', truque );
}

galeria.forEach( galerea )