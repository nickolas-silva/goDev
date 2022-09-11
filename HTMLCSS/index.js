const button = document.querySelector('.button');
const body = document.querySelector('body');
const setaB = document.querySelector('.simbol');

button.onclick = function(){
    this.classList.toggle('ativar');
    body.classList.toggle('ativar');

    if(body.classList.contains('ativar')){
        setaB.src="images/seta_branca.png";

    }
    else{
        setaB.src="images/seta_download.png";
    }

}