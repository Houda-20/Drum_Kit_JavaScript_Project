for(var i=0;i<document.querySelectorAll(".button").length;i++)
{
  
 document.querySelectorAll(".button")[i].addEventListener("click",handelclick);

function handelclick()
{var variabl=this.innerHTML;
    makesound(variabl);
    animation(variabl);
}
}
//keyboard
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    animation(event.key);
}


);

//how to play a sound in javascript
// var audio=new Audio('sounds/crash.mp3');
// audio.play();
function makesound(key)
{
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            case "a":
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "s":
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
            case "d":
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
            case "j":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
            break;
            case "k":
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
            break;
            case "l":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
    
        default:
            console.log(innerHTML);
            break;
    }
}
function animation(currentkey)
{
    var activeButton=document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
    //pour desactiver le fait de cettre instruction il faut désigner le temps nécessaire our l'arréter
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}