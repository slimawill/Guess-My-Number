let valor, highscore=4,tentativa=1;
let secret = Math.floor(Math.random() * 5) + 1;

function resetar(){
    document.querySelector(".vidas").textContent="12";
}

document.querySelector(".check").addEventListener("click", function () {
    valor = document.querySelector("#guess").value;
    if (valor == secret){
        highscore = Math.min(highscore,tentativa)
        document.querySelector(".highscore").textContent = highscore
        secret = Math.floor(Math.random() * 5) + 1;
        tentativa = 1;
        document.querySelector("body").style.backgroundColor = "Green";
        alert("acertou")

    }
    else{
        tentativa++;
        document.querySelector(".vidas").textContent = 4-tentativa
        document.querySelector("body").style.backgroundColor = "red";
        if(tentativa==4){
            alert("voce perdeu");
            secret = Math.floor(Math.random() * 5) + 1;
            tentativa = 1
            
        }
    }
    console.log(secret,highscore,tentativa)
})

console.log(secret,highscore,tentativa)