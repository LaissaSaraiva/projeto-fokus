const html = document.querySelector("html")
const timer = document.querySelector("#timer")
const titulo = document.querySelector('.app__title')
const figure = document.querySelector(".app__image")

// Botões

const focoBtn = document.querySelector(".app__card-button--foco")
const curtoBtn = document.querySelector(".app__card-button--curto")
const longoBtn = document.querySelector(".app__card-button--longo")
const startPauseBtn = document.querySelector("#start-pause")

const temporizadorFoco = 1500;
const temporizadorCurto = 300;
const temporizadorLongo = 900;

function alteraContexto(contexto) {
  html.setAttribute('data-contexto', contexto)
  figure.setAttribute("src", `/imagens/${contexto}.png`)

  switch (contexto) {
    case "foco":
      titulo.innerHTML =`Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>`
      break;
    case "descanso-curto":
      titulo.innerHTML =`Que tal dar uma respirada? <br>
      <strong class="app__title-strong">Faça uma pausa curta.</strong>`
      break;

    case "descanso-longo":
      titulo.innerHTML =`Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`
      break;
  
    default:
      break;
  }
}

focoBtn.addEventListener("click", () => {
  alteraContexto("foco")
})

curtoBtn.addEventListener("click", () => {
  alteraContexto("descanso-curto")
})

longoBtn.addEventListener("click", () => {
  alteraContexto("descanso-longo")
})
