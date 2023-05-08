/* 
Obj 1: Quando o usuário no botão ver trailer, devemos abrir o modal com o video do trailer
    passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS
    passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    passo 3 - dar um jeito de pegar o elemento da modal no JS
    passo 4 - abrir a modal na tela

obj 2: quando o usuário clicar com o X fechar a modal
    passo 1 - dar um jeito de pegar o elemento de fechar modal usando o JS
    passo 2 - dar um jeito de identificar quando o usuário clicar no X
    passo 3 - fechar a modal
*/

const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

