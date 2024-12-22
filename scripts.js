/* Aula 1

// Visualizar o conteúdo do document.
// console.log(document)

// Visualizar o título.
console.log(document.title)


// Acessar o elemento pelo ID.
const guest = document.getElementById("guest-4")
console.log(guest)

// Mostrar propriedades do objeto
console.dir(guest)

// Acessar elemento com class
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

// Exibir o primeiro elemento da lista.
console.log(guestByClass.item(2))
console.log(guestByClass[0])

// Selecionar elementos da lista pela tag
const guestsTag = document.getElementsByName("li")
console.log(guestsTag)

*/

/* Aula 2

// Acessar o elemento pelo selector id (#)
//const guest = document.querySelector("#guest-2")
//console.log(guest)

// Acessa o elemento pela classe (.)
// const guests = document.querySelector(".guest")
// console.log(guests)

// Acessa o elemento pela classe trazendo todos (all)
const guests = document.querySelectorAll(".guest")
console.log(guests)

*/

/* Aula 3
const guest = document.querySelector("#guest-1")

// Retorna o conteúdo como texto.
// console.log(guest.textContent)
// guest.textContent = "José Maria"

console.log(guest.textContent) // Retorna conteúdo visível e oculto.
console.log(guest.innerText) // Retorna conteúdo visível.
console.log(guest.innerHTML) // Retorna HTML como texto.

*/

/* Aula 4
const input = document.querySelector("#name")

// Adiciona classe.
input.classList.add("input-error")

// Remove a classe.
input.classList.remove("input-error")

// Remove ou adiciona dependendo do último estado.
input.classList.toggle("input-error")

const button = document.querySelector("button")
// Modifica propriedades CSS do elemento.
button.style.backgroundColor = "Purple"

*/

/* Aula 5 - Criando Elementos com JS
const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
// Adiciona classe ao elemento
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Diego"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Carvalho"

// Adiciona após o último filho.
// newGuest.append(guestName, guestSurname)

// Adiciona antes do primeiro filho.
// newGuest.prepend(guestSurname)

// Jeito mais simples de adicionar apenas um argumento.
newGuest.appendChild(guestName)

// Adiciona na lista
// guests.append(newGuest)
guests.prepend(newGuest)

*/

/* Aula 6 - Manipulando Atributos
const input = document.querySelector("input")

// Muda o atributo.
// input.setAttribute("disabled", true)
// input.setAttribute("type", "file")

// Remove o atributo.
// input.removeAttribute("id")

*/


/* Aula 7 - Eventos

// Evento que fica observando a janela.
window.addEventListener("load", () => {
  console.log("A página acabou de ser carregada.")
})

addEventListener("click", (nomeEventoEscolhido) => {
  nomeEventoEscolhido.preventDefault()
  // Retorna todas as informações do evento
  // console.log(nomeEventoEscolhido)

  // Retorna o elemento clicado.
  // console.log(nomeEventoEscolhido.target)

  // Retorna o textContent do elemento clicado.
  console.log(nomeEventoEscolhido.target.textContent)

})

*/


/* Aula 8 - Eventos que acontecem em um elemento específico + scroll

const ul = document.querySelector("ul")

// JS observa se alguma interação acontecer com este elemento.
ul.addEventListener("scroll", () => {
  console.log(ul.scrollTop)

  if (ul.scrollTop > 300) {
    // console.log("Você chegou ao fim da lista.")

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
})

const button = document.querySelector("button")
button.addEventListener("click", (eventClick) => {
  event.preventDefault()
  console.log("Você clicou.")
})

*/

/* Aula 10 - Eventos de formulário

const form = document.querySelector("form")

form.onsubmit = (eventEnviado => {
  eventEnviado.preventDefault()
  console.log("Formulário enviado.")
})

// onSubmit considera somente o último
form.onsubmit = (eventEnviado => {
  eventEnviado.preventDefault()
  console.log("Formulário enviado. 2")
})

// addEventListener considera e aciona todos!*
form.addEventListener("submit", (eventEnviado2) => {
  eventEnviado2.preventDefault()
  console.log("Você fez submit no form 3")
})

form.addEventListener("submit", (eventEnviado2) => {
  eventEnviado2.preventDefault()
  console.log("Você fez submit no form 4")
})

*/

/* Aula 11 - Eventos em input */
const input = document.querySelector("input")

// keydown - quando uma tecla é presisonada (captura tudo (cntrl, shift, esc etc))
// input.addEventListener("keydown", (event) => {
// console.log(event.key)
// })

// keypress - quando uma tecla CARACTER é pressionada
input.addEventListener("keypress", (event) => {
  console.log(event.key)
})

// input.addEventListener("change") // Outra forma de usar o evento onchange
input.onchange = () => {
  inputChange()
}

function inputChange() {
  console.log("O input no campo mudou.")
}

/* Aula 12 - Utilizando o Regexr */

/* Aula 13 */