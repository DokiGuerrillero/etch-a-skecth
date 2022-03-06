const body = document.querySelector(".body");
const bigBox = document.querySelector("#bigBox");
const bar = document.getElementById("bar");
let hover = document.getElementsByClassName("lilbox:hover")




const text = '<div class="lilBox" onclick="if (rainbullshit != true) {this.style.cssText= `background-color: ${color1};height:${Math.floor(800/barVal)}px; width: ${Math.floor(800/barVal)}px;`} else {valRed = colorRandom() [0];console.log(valRed);valGreen = colorRandom() [1];valBlue = colorRandom() [2];this.style.cssText= ` background-color: rgb(${valRed},${valGreen},${valBlue});height:${Math.floor(800/barVal)}px; width: ${Math.floor(800/barVal)}px;`}"></div>'
let clicked = false;
let thereIs = false;
let erase = false;
let controlVal = false;
let rainbullshit = false;
let valRed = 0 ;
let valGreen = 0 ;
let valBlue = 0 ;
let color1 =  '';
let color = '';
let barVal = 0; 

function colorRandom() {
    let red, green, blue;
    
    red= Math.floor(Math.random()*256);
    green= Math.floor(Math.random()*256);
    blue= Math.floor(Math.random()*256);


    return [red, green, blue]
}

function clickDown () {
    body.addEventListener("mouseup",()=>clicked= false);
    body.addEventListener("mousedown",()=>clicked= true);
    setInterval(()=>{
        color1 =  document.getElementById(`${blackFun()}`).value;
    },50)
    
}

function blackFun () {
    if (erase == false){
        color = "color1"
    } 
    else {
        color = "color2"
    }
    return color; 
}

function rain () {
    if (rainbullshit == false){rainbullshit = true}else {rainbullshit =false}
}

window.onload = ()=>{let a =document.querySelector("p");
setInterval(()=>{a.textContent = bar.value},50)
clickDown()
createGrid(bar.value);
}


function createGrid (inVal) {
    barVal=inVal;
    if(thereIs!=true){
        console.log(inVal);
        for(let i=0; i<(inVal*inVal);i++) {
            bigBox.innerHTML= bigBox.innerHTML + text
        }
        let lilBoxes = document.querySelectorAll(".lilBox");
        let arrayBoxes = [...lilBoxes]
        for (lilBox of arrayBoxes){
            lilBox.style.cssText = `height:${Math.floor(800/inVal)}px; width: ${Math.floor(800/inVal)}px;`
            bigBox.appendChild(lilBox);
        }
        arrayBoxes.forEach(Element=>{
            Element.addEventListener("mousemove",()=>{
                if(clicked!=false){
                    if( rainbullshit == true){
                        valRed = colorRandom() [0];
                        valGreen = colorRandom() [1];
                        valBlue = colorRandom() [2];
                        Element.style.cssText= ` background-color: rgb(${valRed},${valGreen},${valBlue});height:${Math.floor(800/inVal)}px; width: ${Math.floor(800/inVal)}px;`
                    }else{
                        Element.style.cssText= ` background-color: ${color1};height:${Math.floor(800/inVal)}px; width: ${Math.floor(800/inVal)}px;`
                    }
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


function clean (barVal){
    let lilBoxes = document.querySelectorAll(`.lilBox`);
        let arrayBoxes = [...lilBoxes]
        arrayBoxes.forEach(element =>{
                let color2 =  document.getElementById("color2").value;
                element.style.cssText= ` background-color: ${color2};height:${Math.floor(800/barVal)}px; width: ${Math.floor(800/barVal)}px;`
        })
}

function erasefun (){
    if (erase == true) {erase=false}else erase = true
}
