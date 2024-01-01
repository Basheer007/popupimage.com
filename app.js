const imagetouch = document.getElementById('touch');
const remover = document.getElementById('remover');
const popUp = document.querySelector('.window-popUp');
imagetouch.addEventListener('click', () => {
    popUp.classList.add('reveal')
});
remover.addEventListener('click', () => {
    popUp.classList.remove('reveal')
})