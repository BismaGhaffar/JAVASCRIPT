// alert('working')

var navbar=document.getElementById("navbar");
var sticky=navbar.offsetTop;

console.log(window);

window.onscroll=function(){fixednav()};

function fixednav(){

    if(window.pageYOffset >= sticky ){
        console.log('work');
        navbar.classList.add("fixed");

    }


    else{
        navbar.classList.remove("fixed");
    }
}