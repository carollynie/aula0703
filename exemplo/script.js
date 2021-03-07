console.log('Oi menines')

var entrada = document.querySelector('input')

var saida = document.querySelector('#respostaAno')

function cliquei(){
console.log('cliquei aqui')
var ano = entrada.value
console.log(ano)
saida.textContent = 'Resposta:'
saida.textContent=ano
}