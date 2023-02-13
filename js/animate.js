let left_into = document.querySelectorAll('.left_into');
let right_into = document.querySelectorAll('.right_into');
let up_into = document.querySelectorAll('.up_into')
let flipInY = document.querySelectorAll('.flipInY')
if(window.innerWidth > 768){
    window.addEventListener('scroll', animate)
    animate();
}


function animate(){
    let triggerBottom = window.innerHeight * 1.2;
    left_into.forEach((item) => {
        let item_Top = item.getBoundingClientRect().top;
        if (item_Top < triggerBottom) {
            item.classList.add("animate__backInLeft");
            
        }
    });
    right_into.forEach((item) => {
        let item_Top = item.getBoundingClientRect().top;
        if (item_Top < triggerBottom) {
            item.classList.add("animate__backInRight");
        }
    });
    up_into.forEach((item) => {
        let item_Top = item.getBoundingClientRect().top;
        if (item_Top < triggerBottom) {
            item.classList.add("animate__backInUp");
        }
    });

    flipInY.forEach((item) => {
        let item_Top = item.getBoundingClientRect().top;
        if (item_Top < triggerBottom) {
            item.classList.add("animate__flipInY");
        }
    });    
}