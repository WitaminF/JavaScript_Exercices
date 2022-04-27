// SELECTEURS:

//Va cherche la balise body
//document.querySelector('body');

//document.querySelector("h4");

//document.querySelector(".box");

//document.querySelector("#btn-1").style.background = "yellow";

//const baliseHTML=document.querySelector(".box");

//baliseHTML.style.background = "yellow";

//Click event
const questionContainer = document.querySelector(".click-event")
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click", ()=>{
    questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});


//----------------------------
//Mouse event
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) =>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", ()=>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", ()=>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
})

questionContainer.addEventListener("mouseenter", () =>{
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)"
})

questionContainer.addEventListener("mouseout", () =>{
    questionContainer.style.background = "pink"
})

response.addEventListener("mouseover", () =>{
    response.style.transform = "rotate(2deg)"
})

// --------------------------------------
//Keypress event

