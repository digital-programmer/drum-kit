var drum = document.querySelectorAll('.drum')
for(var i=0;i<drum.length;i++){
    drum[i].addEventListener('click',handleClick);
}

document.addEventListener("keydown",handleKeyDown);

function handleKeyDown(event){
    var pressedKey = event.key;
    playSound(pressedKey);
    
}

function handleClick() {
    var targetDrum = this.innerHTML;
    playSound(targetDrum);
    
}

function playSound(key){
    switch(key){
        case 'w':
             var audio = new Audio("./sounds/tom-1.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 'a':
             var audio = new Audio("./sounds/tom-2.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 's':
             var audio = new Audio("./sounds/tom-3.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 'd':
             var audio = new Audio("./sounds/tom-4.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 'j':
             var audio = new Audio("./sounds/snare.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 'k':
             var audio = new Audio("./sounds/crash.mp3");
             audio.play();
             buttonAnimation(key);
             break;
         case 'l':
             var audio = new Audio("./sounds/kick-bass.mp3");
             audio.play();
             buttonAnimation(key);
             break;
    }
}

function buttonAnimation(key){
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}


