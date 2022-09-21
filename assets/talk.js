const nome = prompt("Qual seu nome?")
var msg = confirm(`Olá! Tudo bem, ${nome}?`)
    if(msg == true){
        alert(`Que booom, ${nome}. Tenha um ótimo dia!`)
        document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/Fc_09oVWIAIflm9.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundColor = "#646464";
    } else {
        alert(`Poxa que pena, uma foto de um gatinho fofo para tentar te alegrar.`)
        document.body.style.backgroundImage = "url('https://assets.puzzlefactory.pl/puzzle/347/576/original.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundColor = "#b4f3e1";
    }