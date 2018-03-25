
var par2=1;

displayslide1(par2);
function prevslide(n){

    displayslide1(par2+=n);

}




// var par1=0;
// displayslide();
// function displayslide(){
  
// // alert('hi');
//     var totalslide=document.getElementsByClassName('img-content');
// console.log(totalslide);
//     var dots=document.getElementsByClassName('round');
//  par1++;   
// if(par1 > totalslide.length){
//     par1=1;

// }



// for(var i=0; i<totalslide.length;i++){
//     totalslide[i].style.display="none";
// }

// // for(var i=0; i<dots.length;i++){
// //    dots[i].className=dots[i].className.replace("active","");
// // }
// totalslide[par1-1].style.display="block";


// // dots[par1-1].className += "active";
// setTimeout(displayslide,2000);

// }

// 2ND FUNCTION



function displayslide1(n){
  
  
        var totalslide=document.getElementsByClassName('img-content');
    // console.log(totalslide);
        var dots=document.getElementsByClassName('round');
        console.log(dots)
     
    if(par2 > totalslide.length){
        par2=1;
    
    }

    if(par2 < 1){
        par2=totalslide.length;
    }
    
    
    
    for(var i=0; i<totalslide.length;i++){
        totalslide[i].style.display="none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    totalslide[par2-1].style.display="block";
    
    dots[par2-1].className += " active";
    

    par2++;
    
   
    setTimeout(displayslide1,3000);
    
    }
    