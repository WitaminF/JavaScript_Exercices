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

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
    const audio = new Audio();
    audio.src = "Ressources/cours/" + key + ".mp3";
    audio.play();
};


document.addEventListener("keypress", (e)=>{
    key.textContent = e.key;
    if (e.key === "j"){
        keypressContainer.style.background = "pink";
    }else if (e.key === "e"){
        keypressContainer.style.background = "teal";
    }else {
        keypressContainer.style.background = "red";
    }

    if (e.key === "z"){
    ring(e.key);
    }
});

// Scroll event --------------------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    if (window.scrollY > 120){
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
})

// Form event ---------------------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";



inputName.addEventListener("input", (e)=>{
    pseudo = e.target.value;

});

select.addEventListener("input", (e)=>{
    language = e.target.value;
});

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (cgv.checked){
        document.querySelector("form > div").innerHTML =
            `<h3>Pseudo : ${pseudo}</h3> <h4> Langage préfére : ${language} </h4>`;
    } else {
        alert("Veuillez accepter les CGV");
    }
});







