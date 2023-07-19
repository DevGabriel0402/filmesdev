// Exibição do elemento de carregamento
var loading = document.getElementById("loading");
loading.style.display = "flex";

// Evento de carregamento da página
window.addEventListener("load", function () {
  setTimeout(function () {
    loading.style.display = "none";
    document.querySelector("main.container").style.opacity = "1";
  }, 1000);
});

// Evento de carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    loading.style.display = "none";
    document.querySelector("main.container").style.opacity = "1";
  }, 1000);
  var searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", filtrarFilmesPorNome);
});

// Função para inserir um blur nas imagem quando um hover for chamado
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("mouseover", () => {
    thumbs.forEach((otherThumb) => {
      if (otherThumb !== thumb) {
        otherThumb.classList.add("blur");
      }
    });
  });

  thumb.addEventListener("mouseout", () => {
    thumbs.forEach((otherThumb) => {
      if (otherThumb !== thumb) {
        otherThumb.classList.remove("blur");
      }
    });
  });
});

// Função para fixar o header nav

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 10 && window.innerWidth <= 850) {
    header.classList.add("transparent");
    header.style.position = "fixed";
    header.style.top = "0";
  } else {
    header.classList.remove("transparent");
    header.style.position = "static";
  }
});

// Filtrar pela Categoria de Filmes

function filtrarFilmes() {
  var generoSelecionado = this.getAttribute("data-genero");
  var filmes = document.getElementsByClassName("box");

  for (var i = 0; i < filmes.length; i++) {
    var filme = filmes[i];
    var generoFilme = filme.getAttribute("data-genero");

    if (generoSelecionado === "todos" || generoSelecionado === generoFilme) {
      filme.style.display = "block";
    } else {
      filme.style.display = "none";
    }
  }
}

function filtrarFilmesPorNome() {
  var filtro = this.value.toLowerCase();
  var filmes = document.getElementsByClassName("box");

  for (var i = 0; i < filmes.length; i++) {
    var filme = filmes[i];
    var tituloFilme = filme.getElementsByTagName("img")[0].alt.toLowerCase();

    if (tituloFilme.includes(filtro)) {
      filme.style.display = "block";
    } else {
      filme.style.display = "none";
    }
  }
}

// Isso irá adicionar a funcionalidade de filtragem de filmes com base no nome inserido na barra de pesquisa.

function alterarEstiloHover() {
  var generoOpcoes = document
    .getElementById("genero")
    .getElementsByTagName("li");

  for (var i = 0; i < generoOpcoes.length; i++) {
    var opcao = generoOpcoes[i];

    opcao.addEventListener("click", function () {
      for (var j = 0; j < generoOpcoes.length; j++) {
        generoOpcoes[j].style.color = "";
      }
      this.style.color = "red";
    });

    opcao.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
    });

    opcao.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  }
}

// Altera o hover das imagens

window.onload = function () {
  alterarEstiloHover();
  var generoOpcoes = document
    .getElementById("genero")
    .getElementsByTagName("li");

  for (var i = 0; i < generoOpcoes.length; i++) {
    generoOpcoes[i].addEventListener("click", filtrarFilmes);
  }
};

// Hamburguer button
window.addEventListener("DOMContentLoaded", function () {
  var menuHamburguer = document.querySelector(".menu-hamburguer");
  var generoMenu = document.querySelector("#genero");

  menuHamburguer.addEventListener("click", function () {
    this.classList.toggle("open");
    generoMenu.classList.toggle("open");
    generoMenu.classList.toggle("menu-ativo");
  });
  // Verificar o tamanho da tela
  function verificarTamanhoTela() {
    if (window.innerWidth <= 850) {
      menuHamburguer.style.display = "block";
      generoMenu.classList.remove("open");
    } else {
      menuHamburguer.style.display = "none";
      generoMenu.classList.remove("open");
    }
  }

  verificarTamanhoTela();

  window.addEventListener("resize", verificarTamanhoTela);
});

// Header Transparent
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var logo = document.querySelector(".logo");

  if (window.scrollY > 0) {
    header.classList.add("transparente");
    logo.classList.add("invertido");
  } else {
    header.classList.remove("transparente");
    logo.classList.remove("invertido");
  }
});

// Abrir Popup do filme

function abrirPopup(link) {
  var popup = window.open(link, "popup", "width=800,height=600");
  popup.focus();
}

// Cria o frame do
function criarIframe(link, thumbUrl) {
  var div = document.createElement("div");
  div.classList.add("popup");

  var closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", function () {
    div.remove();
  });
  div.appendChild(closeButton);

  var iframe = document.createElement("iframe");
  iframe.src = link;
  iframe.allowFullscreen = true;
  div.appendChild(iframe);

  iframe.style.backgroundImage = `url('${thumbUrl}')`; // Define a imagem de fundo da div
  iframe.style.backgroundRepeat = "no-repeat"; // Define a não repetição da imagem
  iframe.style.backgroundSize = "cover"; // Ajusta a imagem a tela
  iframe.style.backgroundPosition = "center"; // Ajusta a posição da imagem

  document.body.appendChild(div);
}
