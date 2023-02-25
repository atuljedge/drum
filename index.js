

  //detecting button press
var NumberofDrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < NumberofDrumbuttons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerhtml = this.innerHTML;
         
        makesound(buttonInnerhtml);

        // buttonAnimation(buttonInnerhtml);
    });
}

 //detecting keyboard press
document.addEventListener("keypress" , function(event)
{
    makesound(event.key);

    // buttonAnimation(event.key);
});

function makesound(key) 
{

    switch (key) {
        case "W":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "J":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "K":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

       default : console.log(buttonInnerhtml);
    }
}

// function buttonAnimation(currentkey)
// {
//     var activebutton=document.querySelector("."+currentkey);

//     activebutton.classList.add("pressed");

//     setTimeout(function()
//     {
//         activebutton.classList.remove("pressed");
//     },100);
// }