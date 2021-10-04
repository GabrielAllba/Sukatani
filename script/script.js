
let mainNavbar = document.getElementById('mn-navbar')
let hamburgerMenu = document.getElementById('hamburger-bar')
hamburgerMenu.addEventListener('click', () => {
    if(mainNavbar.style.display == 'none'){
        mainNavbar.style.display = 'flex'
    }
    else{
        mainNavbar.style.display = 'none'
    }
})

let textH5 = document.getElementsByClassName('text-h5')

if(window.screen.width < 768)
for(let i = 0; i < textH5.length; i++){
    textH5[i].addEventListener('click', () => {
        mainNavbar.style.display = 'none'
    })
}