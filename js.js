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
