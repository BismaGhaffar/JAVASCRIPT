// alert('working');

var images=["img1.jpg","img2.jpeg","img3.jpg"];
var totalimages=3;
var posindex=0;
var flag=true;
var n="img1"+".jpg";
var box=document.getElementById('img-box');

function moveslide(){
    if(!flag){
        posindex++
    }
    // console.log(images[posindex]);
       
        
    
        if(posindex==totalimages){
            posindex=0;
    
        }
       box.innerHTML="<img src='images/"+images[posindex] + "'/>";
       console.log(box.getAttribute('src'));
       dotcircles();
        posindex++;
        flag=true;
        console.log('after');
    
    }


    function prevslide(){
        if(flag){
            posindex--;
        }
console.log('before')

if(posindex==0)
posindex=totalimages;
box.innerHTML="<img  src='images/"+images[posindex - 1]+"' />";
dotcircles();
posindex--;
flag=false;
    }

function dotcircles(){
    var circle=document.getElementsByClassName('round');
    for(var i=0; i< circle.length; i++){
        if(i==posindex){
            circle[i].id="black";
        }

        else{
            circle[i].id="grey";
        }
    }
}

moveslide();
setInterval(
    moveslide

,3000);





