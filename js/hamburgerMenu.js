let hamburgerMenu = document.querySelector('.hamburgerMenu')
let lineList = document.querySelectorAll('.line-list')
hamburgerMenu.addEventListener('click', function(){
    for(let item of lineList){
        console.log(item)
        item.classList.toggle('-on')
    }
})