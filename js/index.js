
// We are adding event listeners only to the classes of "drum"
let drum = document.querySelectorAll(".drum");

for (let index = 0; index < drum.length; index++) {
    drum[index].addEventListener("click", function() {
    
        let key = this.innerHTML;
    
        switch (key) {
            case "w":
                let wSound = new Audio("sounds/tom-1.mp3");
                wSound.play();
                break;
            case "a":
                let aSound = new Audio("sounds/tom-2.mp3");
                aSound.play();
                break;
             case "s":
                let sSound = new Audio("sounds/tom-3.mp3");
                sSound.play();
                break;
            case "d":
                let dSound = new Audio("sounds/tom-4.mp3");
                dSound.play();
                break;
            case "j":
                let jSound = new Audio("sounds/snare.mp3");
                jSound.play();
                break;
            case "k":
                let kSound = new Audio("sounds/crash.mp3");
                kSound.play();
                break;
            case "l":
                let lSound = new Audio("sounds/kick-bass.mp3");
                lSound.play();
                break;
            default:
                break;
        }
    

    })
}

// We are adding an event listener to the entire page. 
document.addEventListener("keydown", function(event) {
    
    switch (event.key) {
        case "w":
            let wSound = new Audio("sounds/tom-1.mp3");
            wSound.play();
            break;
        case "a":
            let aSound = new Audio("sounds/tom-2.mp3");
            aSound.play();
            break;
         case "s":
            let sSound = new Audio("sounds/tom-3.mp3");
            sSound.play();
            break;
        case "d":
            let dSound = new Audio("sounds/tom-4.mp3");
            dSound.play();
            break;
        case "j":
            let jSound = new Audio("sounds/snare.mp3");
            jSound.play();
            break;
        case "k":
            let kSound = new Audio("sounds/crash.mp3");
            kSound.play();
            break;
        case "l":
            let lSound = new Audio("sounds/kick-bass.mp3");
            lSound.play();
            break;
        default:
            break;
    }
})