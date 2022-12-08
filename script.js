let botao = document.querySelector(".cadastrarTimes");
botao.addEventListener("click", () => {
    let times = document.querySelectorAll("#time");
    let infoNome = document.querySelectorAll(".info-nome");
    let listaTimes =[];
       
    for(let i=0;i<times.length;i++){
        infoNome[i].textContent = times[i].value;
        listaTimes.push(times[i].value);
    }
    
    let pTimes = document.querySelectorAll(".posicao");

    for(let i =0;i<pTimes.length;i++){
        if(pTimes[i].textContent == "TIME 1"){
            pTimes[i].textContent = listaTimes[0];
        }
        if(pTimes[i].textContent == "TIME 2"){
            pTimes[i].textContent = listaTimes[1];
        }
        if(pTimes[i].textContent == "TIME 3"){
            pTimes[i].textContent = listaTimes[2];
        }
        if(pTimes[i].textContent == "TIME 4"){
            pTimes[i].textContent = listaTimes[3];
        }
    }
})





