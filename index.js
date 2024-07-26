window.onload=function reset(){
    var ones=0o0,tens=0o0,t=0o0;var s=1;var mins=0o0;var con=0;
document.querySelector(".start").addEventListener("click",function(){
    s=1;
    interval=setInterval(stopwatchtimer,100);
})
var stp=document.querySelector(".stop").addEventListener("click",function(){
s=-1;
con=1;
})

var viewtens=document.getElementById('tens');
var viewones=document.getElementById('ones');
var viewmins=document.getElementById('mins');

function stopwatchtimer(){
if(s==1){tens++;
if(tens<=9){
viewtens.innerHTML='0'+tens;}  
}
if(tens>9){
    tens=0o0;
    // viewtens.innerHTML='0'+tens;
    if(ones<=8)
    {viewones.innerHTML='0' + ++ones;}
    else if(ones>=9 && ones<=58){
        viewones.innerHTML=++ones;
    }
    else{
        viewmins.innerHTML='0' + ++mins;
        ones=0o0;
        
    }
}
else return ;

}
document.querySelector(".rst").addEventListener("click",function(){
    if(con==1){s=-1;
    viewtens.innerHTML="00";
    viewones.innerHTML="00";
    viewmins.innerHTML="00";}
    else {
        return;
    }
    con=0;
})
document.querySelector("button").addEventListener("click",function(){
    if(document.querySelector("button").style.backgroundColor=="white"){
        document.querySelector("button").style.backgroundColor="black";
       {document.getElementById('dark_theme').setAttribute("href","./style2.css");}
    }
    else{document.querySelector("button").style.backgroundColor=="black";
        document.querySelector("button").style.backgroundColor="white";
        {document.getElementById('dark_theme').setAttribute("href","./style1.css");}}
});

 
}
