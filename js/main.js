const playBtnVideoIntro = document.querySelector('.video-box a')
const videoIntroContainer = document.querySelector('.popup-video')
const videoIntro = videoIntroContainer.querySelector('video')

playBtnVideoIntro.onclick = () => {
    videoIntroContainer.style.display = 'block'
}

videoIntroContainer.onclick = (event) => {
    if(event.target !== videoIntro) {
        videoIntroContainer.style.display = 'none'
    }
}