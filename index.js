window.onload=function(){
    var seconds=0o0,tens=0o0,mins=0o0,
 startbtn=document.getElementById('start'),
stopbtn=document.getElementById('stop'),
rstbtn=document.getElementById('rst'),
viewtens=document.getElementById('tens'),
viewones=document.getElementById('ones'),
 viewmins=document.getElementById('mins'),
interval;

startbtn.onclick = function(){
  interval=setInterval(stopwatchtimer,100);
}
stopbtn.onclick=function(){
  clearInterval(interval);
}
rstbtn.onclick=function(){
  clearInterval(interval);
  seconds="00",tens='00',mins='00';
  viewtens.innerHTML=tens;
  viewones.innerHTML=seconds;
  viewmins.innerHTML=mins;
}

function stopwatchtimer(){
tens++;
if(tens<=9){
    viewtens.innerHTML='0'+tens;
}
if(tens >9){
    tens=0o0;seconds++;
if(seconds<=9)
    {viewones.innerHTML='0'+ seconds;}
 if(seconds>9){
    viewones.innerHTML=seconds;
}
 if(seconds>=59){
    seconds=0o0;
    mins++;
    viewmins.innerHTML='0'+mins;
}
}
}

document.getElementById('theme_toggle').addEventListener("click",function(){
    if(document.querySelector("button").style.backgroundColor=="white"){
        document.querySelector("button").style.backgroundColor="black";
       {document.getElementById('dark_theme').setAttribute("href","./style2.css");}
    }
    else{document.getElementById('theme_toggle').style.backgroundColor=="black";
        document.querySelector("button").style.backgroundColor="white";
        {document.getElementById('dark_theme').setAttribute("href","./style1.css");}}
});

 
}
