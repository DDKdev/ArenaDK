let botaoResultado = document.querySelector(".botao__resultado");

botaoResultado.addEventListener("click", () => {
    // capturando os gols de cada time em cada partida e armazenando numa array
    let inputTime1 = document.querySelectorAll('.time1-input');
    let golsTime1 = [];

    for(let i=0; i<inputTime1.length;i++){
        let g = inputTime1[i].value;
        golsTime1.push(g)
    }

    let inputTime2 = document.querySelectorAll('.time2-input');
    let golsTime2 = [];

    for(let i=0; i<inputTime2.length;i++){
        let g = inputTime2[i].value;
        golsTime2.push(g)
    }

    let inputTime3 = document.querySelectorAll('.time3-input');
    let golsTime3 = [];

    for(let i=0; i<inputTime3.length;i++){
        let g = inputTime3[i].value;
        golsTime3.push(g)
    }

    let inputTime4 = document.querySelectorAll('.time4-input');
    let golsTime4 = [];

    for(let i=0; i<inputTime4.length;i++){
        let g = inputTime4[i].value;
        golsTime4.push(g)
    }

    console.log(golsTime1,golsTime2,golsTime3,golsTime4);

    //comparando os resultados

    let tdVitorias = document.querySelectorAll(".info-vitorias");
    let tdDerrotas = document.querySelectorAll(".info-derrotas");
    let tdEmpates = document.querySelectorAll(".info-empates");
    let tdJogos = document.querySelectorAll(".info-jogos");
    let tdPontos = document.querySelectorAll(".info-pontos");

    let vitorias = [0,0,0,0];
    let derrotas = [0,0,0,0];
    let empates = [0,0,0,0];
    let jogos = [0,0,0,0];
    let pontos = [0,0,0,0];

    // JOGO 1
    if(golsTime1[0] > golsTime2[0]){
        vitorias[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        derrotas[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        jogos[0] += 1;
        jogos[1] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[1].textContent = jogos[1];

        pontos[0] += 3;
        tdPontos[0].textContent = pontos[0];
        tdPontos[1].textContent = pontos[1];
    }

    if(golsTime2[0] > golsTime1[0]){
        vitorias[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        derrotas[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        jogos[0] += 1;
        jogos[1] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[1].textContent = jogos[1];

        pontos[1] += 3;
        tdPontos[1].textContent = pontos[1];
        tdPontos[0].textContent = pontos[0];
    }

    if(golsTime1[0] == golsTime2[0]){
        empates[0] += 1;
        empates[1] += 1;
        tdEmpates[0].textContent = empates[0];
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];

        tdEmpates[1].textContent = empates[1];
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];

        jogos[0] += 1;
        jogos[1] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[1].textContent = jogos[1];

        pontos[0] += 1;
        pontos[1] += 1;
        tdPontos[0].textContent = pontos[0];
        tdPontos[1].textContent = pontos[1];
    }

    //JOGO 2
    
    if(golsTime3[0] > golsTime4[0]){
        vitorias[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        derrotas[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        jogos[2] += 1;
        jogos[3] += 1;
        tdJogos[2].textContent = jogos[2];
        tdJogos[3].textContent = jogos[3];

        pontos[2] += 3;
        tdPontos[2].textContent = pontos[2];
        tdPontos[3].textContent = pontos[3];
    }

    if(golsTime4[0] > golsTime3[0]){
        vitorias[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        derrotas[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        jogos[2] += 1;
        jogos[3] += 1;
        tdJogos[2].textContent = jogos[2];
        tdJogos[3].textContent = jogos[3];

        pontos[3] += 3;
        tdPontos[3].textContent = pontos[3];
        tdPontos[2].textContent = pontos[2];
    }

    if(golsTime3[0] == golsTime4[0]){
        empates[2] += 1;
        empates[3] += 1;
        tdEmpates[2].textContent = empates[2];
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];

        tdEmpates[3].textContent = empates[3];
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];

        jogos[2] += 1;
        jogos[3] += 1;
        tdJogos[2].textContent = jogos[2];
        tdJogos[3].textContent = jogos[3];

        pontos[2] += 1;
        pontos[3] += 1;
        tdPontos[2].textContent = pontos[2];
        tdPontos[3].textContent = pontos[3];
    }

    //JOGO 3 - Rodada 2
    if(golsTime1[1] > golsTime3[1]){
        vitorias[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        derrotas[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        jogos[0] += 1;
        jogos[2] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[2].textContent = jogos[2];

        pontos[0] += 3;
        tdPontos[0].textContent = pontos[0];
        tdPontos[2].textContent = pontos[2];
    }

    if(golsTime3[1] > golsTime1[1]){
        vitorias[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        derrotas[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        jogos[0] += 1;
        jogos[2] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[2].textContent = jogos[2];

        pontos[2] += 3;
        tdPontos[2].textContent = pontos[2];
        tdPontos[0].textContent = pontos[0];
    }

    if(golsTime3[1] == golsTime1[1]){
        empates[2] += 1;
        empates[0] += 1;
        tdEmpates[2].textContent = empates[2];
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];

        tdEmpates[0].textContent = empates[0];
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];

        jogos[0] += 1;
        jogos[2] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[2].textContent = jogos[2];

        pontos[2] += 1;
        pontos[0] += 1;
        tdPontos[2].textContent = pontos[2];
        tdPontos[0].textContent = pontos[0];
    }
    
    //JOGO 4

    if(golsTime2[1] > golsTime4[1]){
        vitorias[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        derrotas[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        jogos[1] += 1;
        jogos[3] += 1;
        tdJogos[1].textContent = jogos[1];
        tdJogos[3].textContent = jogos[3];

        pontos[1] += 3;
        tdPontos[1].textContent = pontos[1];
        tdPontos[3].textContent = pontos[3];
    }

    if(golsTime4[1] > golsTime2[1]){
        vitorias[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        derrotas[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        jogos[3] += 1;
        jogos[1] += 1;
        tdJogos[3].textContent = jogos[3];
        tdJogos[1].textContent = jogos[1];

        pontos[3] += 3;
        tdPontos[3].textContent = pontos[3];
        tdPontos[1].textContent = pontos[1];
    }

    if(golsTime2[1] == golsTime4[1]){
        empates[1] += 1;
        empates[3] += 1;
        tdEmpates[1].textContent = empates[1];
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];

        tdEmpates[3].textContent = empates[3];
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];

        jogos[3] += 1;
        jogos[1] += 1;
        tdJogos[3].textContent = jogos[3];
        tdJogos[1].textContent = jogos[1];

        pontos[3] += 1;
        pontos[1] += 1;
        tdPontos[3].textContent = pontos[3];
        tdPontos[1].textContent = pontos[1];
    }

    //JOGO 5
    if(golsTime1[2] > golsTime4[2]){
        vitorias[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        derrotas[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        jogos[0] += 1;
        jogos[3] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[3].textContent = jogos[3];

        pontos[0] += 3;
        tdPontos[0].textContent = pontos[0];
        tdPontos[3].textContent = pontos[3];
    }

    if(golsTime4[2] > golsTime1[2]){
        vitorias[3] += 1;
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];
        tdEmpates[3].textContent = empates[3];

        derrotas[0] += 1;
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];
        tdEmpates[0].textContent = empates[0];

        jogos[0] += 1;
        jogos[3] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[3].textContent = jogos[3];

        pontos[0] += 3;
        tdPontos[0].textContent = pontos[0];
        tdPontos[3].textContent = pontos[3];
    }

    if(golsTime1[2] == golsTime4[2]){
        empates[0] += 1;
        empates[3] += 1;
        tdEmpates[0].textContent = empates[0];
        tdVitorias[0].textContent = vitorias[0];
        tdDerrotas[0].textContent = derrotas[0];

        tdEmpates[3].textContent = empates[3];
        tdVitorias[3].textContent = vitorias[3];
        tdDerrotas[3].textContent = derrotas[3];

        jogos[0] += 1;
        jogos[3] += 1;
        tdJogos[0].textContent = jogos[0];
        tdJogos[3].textContent = jogos[3];

        pontos[0] += 1;
        pontos[3] += 1;
        tdPontos[0].textContent = pontos[0];
        tdPontos[3].textContent = pontos[3];
    }

    //JOGO 6
    if(golsTime3[2] > golsTime2[2]){
        vitorias[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        derrotas[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        jogos[1] += 1;
        jogos[2] += 1;
        tdJogos[1].textContent = jogos[1];
        tdJogos[2].textContent = jogos[2];

        pontos[2] += 3;
        tdPontos[2].textContent = pontos[2];
        tdPontos[1].textContent = pontos[1];
    }

    if(golsTime2[2] > golsTime3[2]){
        vitorias[1] += 1;
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];
        tdEmpates[1].textContent = empates[1];

        derrotas[2] += 1;
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];
        tdEmpates[2].textContent = empates[2];

        jogos[1] += 1;
        jogos[2] += 1;
        tdJogos[1].textContent = jogos[1];
        tdJogos[2].textContent = jogos[2];

        pontos[1] += 3;
        tdPontos[1].textContent = pontos[1];
        tdPontos[2].textContent = pontos[2];
    }
    
    if(golsTime3[2] == golsTime2[2]){
        empates[2] += 1;
        empates[1] += 1;
        tdEmpates[2].textContent = empates[2];
        tdVitorias[2].textContent = vitorias[2];
        tdDerrotas[2].textContent = derrotas[2];

        tdEmpates[1].textContent = empates[1];
        tdVitorias[1].textContent = vitorias[1];
        tdDerrotas[1].textContent = derrotas[1];

        jogos[1] += 1;
        jogos[2] += 1;
        tdJogos[1].textContent = jogos[1];
        tdJogos[2].textContent = jogos[2];

        pontos[1] += 1;
        pontos[2] += 1;
        tdPontos[2].textContent = pontos[2];
        tdPontos[1].textContent = pontos[1];
    }
})


