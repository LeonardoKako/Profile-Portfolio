const links = document.querySelectorAll('.item');
const checkbox = document.querySelector('.menu-hamburguer-input');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        checkbox.checked = false; 
    });
});
