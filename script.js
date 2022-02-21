const body = document.querySelector(".body");
const bigBox = document.querySelector("#bigBox");
const bar = document.getElementById("bar");

let clicked = false;
let thereIs = false;
let erase = false;
let addVal = "";
let removeVal = "";

function clickDown () {
    body.addEventListener("mouseup",()=>clicked= false);
    body.addEventListener("mousedown",()=>clicked= true);
    setInterval(()=>{
        if (clicked==true){
            body.style.cssText = `background-color: black`
        } else {
            body.style.cssText = `background-color: white`
        }
    },50)
    
}

function blackFun () {
    if (erase == false){
        addVal = "active"
        removeVal = "lilBox"

    } 
    else {
        addVal = "lilBox"
        removeVal = "active"
    }
    return [addVal,removeVal] 
}

window.onload = ()=>{let a =document.querySelector("p");
setInterval(()=>{a.textContent = bar.value},50)
clickDown();
}

function createGrid (inVal) {
    if(thereIs!=true){
        console.log(inVal);
        for(let i=0; i<(inVal*inVal);i++) {
            bigBox.innerHTML= bigBox.innerHTML + `<div class="lilBox"></div>`
        }
        let lilBoxes = document.querySelectorAll(".lilBox");
        let arrayBoxes = [...lilBoxes]
        for (lilBox of arrayBoxes){
            lilBox.style.cssText = `height:${800/inVal}px; width: ${800/inVal}px;`
            bigBox.appendChild(lilBox);
        }
        arrayBoxes.forEach(Element=>{
            Element.addEventListener("mouseover",()=>{
                let lilMatrix = blackFun();
                if(clicked!=false){
                    Element.classList.add(`${lilMatrix[0]}`);Element.classList.remove(`${lilMatrix[1]}`)
            }
            })
        })
        thereIs = true;
        return arrayBoxes  
    }
} 

function killGrid(){
    if (thereIs!=false){
        let lilBoxes = document.querySelectorAll(".lilBox");
        let lilBoxes2 = document.querySelectorAll(".active");
        for (lilBox of lilBoxes){
            bigBox.removeChild(lilBox)
        }
        for (lilBox of lilBoxes2){
            bigBox.removeChild(lilBox)
        }
        thereIs = false
    }
    return 0
}
