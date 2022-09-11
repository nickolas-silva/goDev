const button = document.querySelector('.button');
const body = document.querySelector('body');
const seta = document.querySelector('.seta-d');

button.onclick = function(){
    this.classList.toggle('ativar');
    body.classList.toggle('ativar');
    
    if(body.classList.contains('ativar')){
        seta.src="images/seta_branca.png";
    }
    else{
        seta.src="images/seta_download";
    }

}