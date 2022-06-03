/* Colocando senha no site

var resp = window.prompt("Digite a senha")
        while (resp!='000'){
        var resp = window.prompt('Senha incorreta, tente novamente');
        console.log(resp);
        }
*/

/* Menu */

const btn = document.getElementById('btn');

function mostrarMenu (){
    const nav = document.getElementById('nav');
    nav.classList.toggle('ativo')
    
}

btn.addEventListener('click',mostrarMenu);