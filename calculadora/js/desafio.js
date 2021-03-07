console.log('Hello, hello')

var inputValorHora = document.querySelector('#valor-hora')
var inputHoraProjeto = document.querySelector('#horas-projeto')

function calcular(){
var vhora= inputValorHora.valueAsNumber
var hprojeto= inputHoraProjeto.valueAsNumber
var resultadomult =vhora*hprojeto

var resultadofinal= document.querySelector('#resposta')
resultadofinal.textContent= 'Resultado = '+'R$ '+resultadomult
}