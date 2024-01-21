function move(id){
    document.getElementById(id).style.top = Math.floor(Math.random()*78+5)+"%";
    document.getElementById(id).style.left = Math.floor(Math.random()*40+10)+"%";
}
function playmusic(id){
    document.getElementById(id).play();
}
document.getElementById("粉球").onclick = function() {
    document.getElementById("粉球").style.display = "none";
    let js = document.querySelectorAll('.角色头像');
    for (let i = 0; i < js.length; i++) {
      js[i].style.display = "block";
    }
    playmusic('背景音乐');
}
document.getElementById("可莉头像").onclick = function() {
    if(Math.random()<0.3){
        let js = document.querySelectorAll('.角色头像');
        for (let i = 0; i < js.length; i++) {
            js[i].style.display = "none";
        }
        document.getElementById("可莉图片").style.display = "block";
        document.getElementById("背景音乐").volume = 0.1;
        playmusic('可莉语音1');
    }else{
        move('可莉头像');
        if(Math.random()<0.5){playmusic('可莉语音2');}
        else{playmusic('可莉语音3');}
    }
}
document.getElementById("草神头像").onclick = function() {
    if(Math.random()<0.3){
        let js = document.querySelectorAll('.角色头像');
        for (let i = 0; i < js.length; i++) {
            js[i].style.display = "none";
        }
        document.getElementById("草神图片").style.display = "block";
        document.getElementById("背景音乐").volume = 0.1;
        playmusic('草神语音1');
    }else{
        if(Math.random()<0.5){playmusic('草神语音2');move('草神头像');}
        else{
            playmusic('草神语音3');
            document.getElementById("草神头像").style.animationPlayState = "paused";
            setTimeout(function() {
                document.getElementById("草神头像").style.animationPlayState = "running";
            }, 1800);
        }
    }
}
document.getElementById("七七头像").onclick = function() {
    if(Math.random()<0.3){
        let js = document.querySelectorAll('.角色头像');
        for (let i = 0; i < js.length; i++) {
            js[i].style.display = "none";
        }
        document.getElementById("七七图片").style.display = "block";
        document.getElementById("背景音乐").volume = 0.1;
        playmusic('七七语音1');
    }else{
        move('七七头像');
        if(Math.random()<0.5){playmusic('七七语音2');}
        else{playmusic('七七语音3');}
    }
}
document.getElementById("神子头像").onclick = function() {
    if(Math.random()<0.3){
        let js = document.querySelectorAll('.角色头像');
        for (let i = 0; i < js.length; i++) {
            js[i].style.display = "none";
        }
        document.getElementById("神子图片").style.display = "block";
        document.getElementById("背景音乐").volume = 0.1;
        playmusic('神子语音1');
    }else{
        move('神子头像');
        if(Math.random()<0.5){playmusic('神子语音2');}
        else{playmusic('神子语音3');}
    }
}
document.querySelectorAll('.角色图片').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById("背景音乐").volume = 0.6;
        let jstp = document.querySelectorAll('.角色图片');
        for (let i = 0; i < jstp.length; i++) {
            jstp[i].style.display = "none";
        }
        let jstx = document.querySelectorAll('.角色头像');
        for (let i = 0; i < jstx.length; i++) {
            jstx[i].style.display = "block";
        }
    });
  });
  
