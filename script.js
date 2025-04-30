const imagem = document.getElementById("imagemZoom");

// Quando o mouse entra na imagem
imagem.addEventListener("mouseenter", () => {
  imagem.classList.add("zoom-in");
});

// Quando o mouse sai da imagem
imagem.addEventListener("mouseleave", () => {
  imagem.classList.remove("zoom-in");
});


const imagens = ['imgs/ambiente1.png', 'imgs/ambiente2.png', 'imgs/ambiente3.png']; 
let indice = 0;

function mostrarImagem() {
  const img = document.getElementById('imagem');
  img.src = imagens[indice];
}

function proxima() {
  indice = (indice + 1) % imagens.length;
  mostrarImagem();
}

function anterior() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem();
}




