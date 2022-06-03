/* Lampada*/


const lamp = window.document.getElementById('lamp');
const turnOnOff = window.document.getElementById('turnOnOff');

function LampOn(){
    lamp.src= 'imagens/ligada.jpg';
};

function LampOff(){
    lamp.src= 'imagens/desligada.jpg';
};

function LampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        LampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        LampOff()
        turnOnOff.textContent = 'Ligar'
    }
}


turnOnOff.addEventListener('click',LampOnOff);