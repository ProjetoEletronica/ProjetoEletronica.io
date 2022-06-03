/* Colocando senha no site

var resp = window.prompt("Digite a senha")
        while (resp!='000'){
        var resp = window.prompt('Senha incorreta, tente novamente');
        console.log(resp);
        }
*/
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
lamp.addEventListener('dblclick',Lampbreak);
