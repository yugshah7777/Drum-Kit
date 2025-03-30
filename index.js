// document.querySelector("button").addEventListener("click", handleClick);
// // here handleClick() will not come as it will call the function as soon as the js file is executed means at the time of refresh
// // while handleClick will call the function only when addEventListener is called
// function handleClick() {
//     alert("I got Clicked");
// }

// OR
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got Clicked");
    
//     // this is an anonymous function
//     // it's without name
//     // what to do when click is detected
// });

// OR
// for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {  
//     // we are more specific to .drum as there can be added more buttons in html
//     document.querySelectorAll(".drum")[i].addEventListener("click", function  () {
//         alert("I got Clicked");
//     });
// }

// Code from her
for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {  
    // we are more specific to .drum as there can be added more buttons in html
    document.querySelectorAll(".drum")[i].addEventListener("click", function  () {
        // console.log(this);  // will print that whole line in console
        // this refers to the whole button here will run when button is clicked
        // if a is clicked then console will print <button class="a drum">a</button>    // a will be printed if it was this.innerHTML

        // this.style.color = "white";  // a, w, d ...
        // when the key will be pressed it's color will change to white
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

addEventListener("keydown", function(event){ // keypress instead of keydown also works
    // console.log(event); // these will print which key is pressed in console
    // e.g - if w is pressed then console will print
    // KeyboardEvent {isTrusted: true, key: 'w', code: 'KeyW', location: 0, ctrlKey: false, …}
    // by expanding it we will get a whole bunch of information (key, keycode, charcode, code....)
    makeSound(event.key);
    buttonAnimation(event.key);
    // we are passing event.key as event will contain so many information from which here we just want to use key
});

function makeSound(key) {
    switch(key) {
        case 'w': 
            var tom1 = new Audio("./tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("./tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("./tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("./snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("./crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("./kick-bass.mp3");
            kick.play();
            break;
        default: console.log(this.innerHTML);
    }
}

function buttonAnimation(key) {
    document.querySelector("."+key).classList.add("pressed");    // pressed is the class made in our css module

    setTimeout(function() { // will remove class pressed after 100 millisecond
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);    // 100 millisecond

    // pressed will make the button dim or reduce it's opactity and generate shadow 
    // but should be removed after pressing so that the animation could be generated again
}