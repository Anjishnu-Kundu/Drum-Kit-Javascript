
numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detecting button press or mouse click

for(var i=0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () { //this is called anonymous function
    
    //this.style.color = 'white';  // this is the identity of the button that triggered the event

    var buttonInnerHTML = this.innerHTML;

    // switch(buttonInnerHTML) {
    //     case "w":
    //         var audio = new Audio('sounds/tom-1.mp3');
    //         audio.play();
    //     break;
    //     case "a": 
    //         var audio = new Audio('sounds/tom-2.mp3');
    //         audio.play();
    //     break;
    //     case "s":
    //         var audio = new Audio('sounds/tom-3.mp3');
    //         audio.play();
    //     break;
    //     case "d":
    //         var audio = new Audio('sounds/tom-4.mp3');
    //         audio.play();
    //     break;
    //     case "j":
    //         var audio = new Audio('sounds/snare.mp3');
    //         audio.play();
    //     break;
    //     case "k":
    //         var audio = new Audio('sounds/crash.mp3');
    //         audio.play();
    //     break;
    //     case "l":
    //         var audio = new Audio('sounds/kick-bass.mp3');
    //         audio.play();
    //     break;

    //     default: console.log(buttonInnerHTML);
    // }

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    // what happens when the button is clicked!
});

}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
    // alert("Key was pressed!"); 
    // console.log(event);
    makeSound(event.key); // in place of event we can pass in any parameter like e or evt etc. and the function is called by the object that experiences the click or the keypress
    // When we add an event listener to an element, then once the event happens the element will trigger the function that is in the second parameter
    // In this case when the key is pressed then the EventListener will trigger the function to send an alert
    // In the previous case "this" keyword was used to find out the trigger
    // In this case we will pass a parameter "event" that will help us identify the trigger
    buttonAnimation(event.key);
});

function makeSound(key) { 
    switch(key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a": 
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;

        default: console.log(key);
    }
}

// Adding Animations

function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);  // setTimeout() helps to blink the key pressed and it takes two arguments: function(), and the timeout in millisecs.
}