const menuNavbar = document.querySelector('.menu-navbar');
const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');
const list = document.querySelector('ul');
const closeOpen = [icon, list];

closeOpen.forEach(item => {
    item.addEventListener('click', function() {
        menuNavbar.classList.toggle('active');
    
        if(menuNavbar.classList.contains('active')) {
            icon.innerHTML = '<span class="material-icons">close<span>'
        } else {
            icon.innerHTML = '<span class="material-icons">menu<span>'
        }
    })
})