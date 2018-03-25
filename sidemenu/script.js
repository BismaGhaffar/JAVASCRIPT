function openmenu(){
    var menubtn=document.getElementById("sidemenu");
    var body=document.getElementById("container");
  menubtn.style.width="250px";
  body.style.marginLeft="250px";

}

function closemenu(){
    var body=document.getElementById("container");
    var menubtn=document.getElementById("sidemenu");
menubtn.style.width="0px";
body.style.marginLeft="0px";

}