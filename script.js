let times = document.querySelectorAll(".times");

for(let i=0; i<times.length;i++){
    let time = times[i];

    let tdVitorias = time.querySelector(".info-vitorias");
    let vitorias = tdVitorias.textContent;

    let tdDerrotas = time.querySelector(".info-derrotas");
    let derrotas = tdDerrotas.textContent;

    let tdEmpates = time.querySelector(".info-empates");
    let empates = tdEmpates.textContent;

    let totalPontos = somaPontos(vitorias,empates);

    let tdPontuacao = time.querySelector(".info-pontos");
    tdPontuacao.textContent = totalPontos;
}

function somaPontos (vitorias,empates){
    let totalPontos = vitorias*3 + empates*1;

    return totalPontos;
}