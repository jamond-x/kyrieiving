let pieces = document.getElementsByClassName("piece")

let container = document.getElementById('container')
let header = document.getElementById("header")

pieces[0].addEventListener('mouseenter',() => {
    container.style.backgroundImage = 'url(https://kyrieirving.com/wp-content/themes/kai-theme-1-0-4/assets/kai-head/bg-blue@2x.png)'
    header.style.color = '#b3d5eb'
    header.style.color = '#0071bc'
})

pieces[1].addEventListener('mouseenter',() => {
    container.style.backgroundImage = 'url(https://kyrieirving.com/wp-content/themes/kai-theme-1-0-4/assets/kai-head/bg-cyan@2x.png)'
    header.style.color = '#d8ecf3'
    header.style.color = '#7cbed8'

})

pieces[2].addEventListener('mouseenter',() => {
    container.style.backgroundImage = 'url(https://kyrieirving.com/wp-content/themes/kai-theme-1-0-4/assets/kai-head/bg-purple@2x.png)'
    header.style.color = '#eac4e5'
    header.style.color = '#ba3aa9'
})

pieces[3].addEventListener('mouseenter',() => {
    container.style.backgroundImage = 'url(https://kyrieirving.com/wp-content/themes/kai-theme-1-0-4/assets/kai-head/bg-yellow@2x.png)'
    // header.style.color = '#faf0cc'
    header.style.color = '#edcc55'
})

pieces[4].addEventListener('mouseenter',() => {
    container.style.backgroundImage = 'url(https://kyrieirving.com/wp-content/themes/kai-theme-1-0-4/assets/kai-head/bg-red@2x.png)'
    // header.style.color = '#ffbfc5'
    header.style.color = '#ff273c'
})


window.onload = () => {
    let event = document.createEvent("MouseEvents");
     event.initEvent("mouseenter");
     pieces[1].dispatchEvent(event);
 }