const botoes = document.querySelectorAll(".botao");
const textos = documento.querySelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            botoes[i].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contaores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05");
const tempoObjetivo2 = new Date("2024-11-30");
const tempoObjetivo3 = new Date("2024-12-05");
const tempoObjetivo4 = new Date("2024-07-04");



contaores[0].textContent = i

function calculatempo (tempoObjetiv){

let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(horas/60);
let dia = Math.floor(hoas/24);

segundo%=60;
minutos%=60;
horas%=60;

return dias "dias" + dias + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}
