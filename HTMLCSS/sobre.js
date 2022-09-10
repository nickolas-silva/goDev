const button = document.querySelector('.button');
const body = document.querySelector('body');
const seta = document.querySelector('.seta');

button.onclick = function(){
    this.classList.toggle('ativar');
    body.classList.toggle('ativar');
    
    if(body.classList.contains('ativar')){
        seta.src="images/white_seta.png";
    }
    else{
        seta.src="images/seta_download.png";
    }

}