let buttons = document.querySelectorAll(".drum")

let snare = new Audio("./sounds/snare.mp3")
let crash = new Audio("./sounds/crash.mp3")
let kickBass = new Audio("./sounds/kick-bass.mp3")
let tom1 = new Audio("./sounds/tom-1.mp3")
let tom2 = new Audio("./sounds/tom-2.mp3")
let tom3 = new Audio("./sounds/tom-3.mp3")
let tom4 = new Audio("./sounds/tom-4.mp3")
let keyXobject = {"w":snare,"a":crash,"s":kickBass,"d":tom1,"j":tom2,"k":tom3,"l":tom4}

tom4.addEventListener("canplay",()=>{
    tom4.play()
})


buttons.forEach(element =>{
    element.addEventListener("click",()=>{
        //element.style.color = "green"
        //if you made this forEach loop in a for loop instead you could have use this
        keyXobject[element.classList[0]].play()

    })
})


document.addEventListener("keypress",function(event){
    if(Object.keys(keyXobject).some(value=>value==event.key)){
        keyXobject[event.key].play()
            document.querySelector(`.${event.key}`).classList.add("pressed")
        setTimeout(()=>{
            document.querySelector(`.${event.key}`).classList.remove("pressed")
        },200)
    }
})
