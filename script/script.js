
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

if(window.screen.width < 769)
for(let i = 0; i < textH5.length; i++){
    textH5[i].addEventListener('click', () => {
        mainNavbar.style.display = 'none'
    })
}

let imageIndex = 0;

function showSlideshow(){
    let slide = document.getElementsByClassName('slide')
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none'
    }
    //increment for update the slideshow index
    imageIndex++;
    if(imageIndex > slide.length){
        imageIndex = 1;
    }
    /*if we don't increment the imageindex
    it always be 0 and will not update the slideshow */
    slide[imageIndex-1].style.display = 'flex';
    setTimeout(showSlideshow, 7000)
}

showSlideshow();