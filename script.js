

let inputAdultos = document.getElementById("adultos");
let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado")


function calcular() {

    
    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;

    let hm = Math.ceil(parseInt(inputHomens.value) + parseInt(inputMulheres.value))

    let TotalCerveja = cervejaPP(duracao) * hm;
    let TotalBebidas = bebidasPP(duracao) * hm + (bebidasPP(duracao)/2);
    
    let qtdCarneHomens = 400 * homens;
    let qtdMulheres = 200 * mulheres;
    let qtdCriancas = 100 * criancas;

    let qtdCarne = qtdCarneHomens + qtdMulheres + qtdCriancas;

    resultado.innerHTML = `<p>${qtdCarne/1000} Kg de Carne</>`
    resultado.innerHTML += `<p>${Math.ceil (TotalCerveja / 355)} latas Cerveja</>`
    resultado.innerHTML += `<p>${Math.ceil (TotalBebidas / 2000)} garrafas de Bebidas</>`
}


function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
