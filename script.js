gsap.from("#context",{
    scale:0,
    opacity:0,
    delay:0.5,
    duration:0.7
})
gsap.to("#context",{
    delay:0.8,
    duration:1,
    backgroundColor:"#a1c5d2",
    
})
var time = 60;
var score = 0;
var hitc = 0;
function makebubble(){
    var space = ""
    for(var i=1;i<=160;i++){
        var v = Math.floor(Math.random()*10);
        space+=`<div id="box">${v}</div>`;

    }
    document.querySelector("#pbtm").innerHTML=space;
}
function changehit(){
    hitc = Math.floor(Math.random()*10);
    document.getElementById("hit").textContent=hitc;
}
function settime(){
    var timeout = setInterval(function(){
        time--;
        if(time>=0){
            document.getElementById("timer").textContent=time;
        }
        else{
            clearInterval(timeout);
            document.querySelector("#pbtm").innerHTML= `<div id="after">Score: ${score}</div>`;
            gsap.to("#pbtm",{
                delay:0.1,
                duration:0.5,
                backgroundColor:"#044d67"
            })


        }
        

    },1000);

}
function updatescore(){
    score+=10;
    document.getElementById("score").textContent=score;

}
makebubble();
changehit();
settime();
document.querySelector("#pbtm").addEventListener("click",function(info){
    var popped = Number(info.target.textContent);
    console.log(popped)
    console.log(hitc)
    if(popped === hitc){
        //console.log("yes");
        updatescore();
        changehit();
        makebubble();

    }
    


});
