
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

let bottomHeader = document.getElementById('bottom-header')
let scrollColor = document.getElementsByClassName('scroll-color')
let sukataniText = document.getElementsByClassName('sukatani-logo')[0]
let messageButton = document.getElementsByClassName('message-button')[0]
window.onscroll = () => {
    if(document.documentElement.scrollTop > 80){
        bottomHeader.style.background = '#344e41';
        bottomHeader.style.transition = '.2s'
        messageButton.style.opacity = '1'
        messageButton.style.transition = '.2s'
        messageButton.style.bottom = '4%'
        messageButton.style.right = '3%'
        for(let i = 0; i < scrollColor.length; i++){
            scrollColor[i].style.color = 'white'
            scrollColor[i].style.transition = '.2s'
        }
        sukataniText.style.color = 'white';
        sukataniText.style.transition = '.2s'
        hamburgerMenu.style.color = 'white'
        sukataniText.style.transition = '.2s'
    }
    else{
        bottomHeader.style.background = ''
        bottomHeader.style.transition = '.2s'
        for(let i = 0; i < scrollColor.length; i++){
            scrollColor[i].style.color = ''
            scrollColor[i].style.transition = '.2s'
        }
        messageButton.style.opacity = ''
        messageButton.style.transition = ''
        messageButton.style.bottom = ''
        messageButton.style.right = ''
        sukataniText.style.color = '';
        sukataniText.style.transition = '.2s'
        hamburgerMenu.style.color = ''
        sukataniText.style.transition = '.2s'
    }
}

let liveChat = document.getElementById('livechat')

messageButton.addEventListener('click', () => {
    if(liveChat.style.display == 'none'){
        liveChat.style.display = 'flex'
    }
    else{
        liveChat.style.display = 'none'
    }
})
