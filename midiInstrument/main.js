function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
//

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;
//

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;
//

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;
//

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;
//

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;
//

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;
//

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;
//

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;


//Adicionar o evento de tecla
document.addEventListener("keydown", function(event) {
    //Mostrar qual tecla foi acionada no evento
    console.log(event.key);

    //Verificando botão específico
    if(event.key === "Enter"){
        console.log("Apertou Enter");
        }

    if(event.key === "q" || event.key === "Q"){
        tocaSomPom();
    }
        
    if(event.key === "w" || event.key === "W"){
        tocaSomClap();
    }

    if(event.key === "e" || event.key === "E"){
        tocaSomTim();
        }
    
    if(event.key === "a" || event.key === "A"){
        tocaSomPuff();
    }

    if(event.key === "s" || event.key === "S"){
        tocaSomSplash();
    }

    if(event.key === "d" || event.key === "D"){
        tocaSomToim();
    }

    if(event.key === "z" || event.key === "Z"){
    tocaSomPsh();
    }
    
    if(event.key === "x" || event.key === "X"){
        tocaSomTic();
    }

    if(event.key === "c" || event.key === "C"){
    tocaSomTom();
    }

});