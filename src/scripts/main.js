const links = document.querySelectorAll('.item');
const checkbox = document.querySelector('.menu-hamburguer-input');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        checkbox.checked = false; 
    });
});

const itemSobre = document.getElementById('item-sobre')
const sobre = document.getElementById('sobre')

itemSobre.addEventListener('click', function(){
    sobre.scrollIntoView({
        behavior: 'smooth'
    });
})
const itemHabilidades = document.getElementById('item-habilidades')
const habilidades = document.getElementById('habilidades')

itemHabilidades.addEventListener('click', function(){
    habilidades.scrollIntoView({
        behavior: 'smooth'
    });
})
const itemProjetos = document.getElementById('item-projetos')
const projetos = document.getElementById('projetos')

itemProjetos.addEventListener('click', function(){
    projetos.scrollIntoView({
        behavior: 'smooth'
    });
})
const itemContato = document.getElementById('item-contato')
const contato = document.getElementById('contato')

itemContato.addEventListener('click', function(){
    contato.scrollIntoView({
        behavior: 'smooth'
    });
})

const telefone = document.getElementById('telefone')
telefone.addEventListener('click', function(){
   window.open('https://wa.me/+5548988352502', '_blank');
})

const github = document.getElementById('github')
github.addEventListener('click', function(){
   window.open('https://github.com/LeonardoKako', '_blank');
})

const linkedin = document.getElementById('linkedin')
linkedin.addEventListener('click', function(){
   window.open('https://www.linkedin.com/in/leonardo-jo%C3%A3o-fleith/', '_blank');
})