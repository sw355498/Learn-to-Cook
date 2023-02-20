let goToTop = document.querySelector("#myBtn")
window.addEventListener('scroll', scrollFunction)
scrollFunction()

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
}


goToTop.addEventListener('click',topFunction)
topFunction()

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
