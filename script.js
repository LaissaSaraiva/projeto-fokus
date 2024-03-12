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



focoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco")
})

curtoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto")
})

longoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo")
})


