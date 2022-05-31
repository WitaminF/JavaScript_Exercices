//XMLHttpRequest
/*function reqListener() {
    console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
//req.open("get", "data.txt", true);
//req.open("get", "data.json", true);
//req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();*/

//---------------------------
//FETCH
//---------------------------

//Fetch lien + option, then : tant que tu n'as pas la réponse (promesse)
//fetch("monlien", "object d'options").then((response)=>{
    //response
    //Si la requête n'est pas passée, on fait un catch pour l'erreur
//}).catch((err) => console.log(err));

/*
fetch("data.txt")
    .then((res) => res.text());
    //.then((data) => console.log(data));
fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
*/

fetch("data.json").then((res) => res.json());
const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
}

//fetch("data.json", init).then((res) => console.log(res));
//--------------------------------------------------------------
//CRUD : Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
    method: "POST" ,
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        pseudo: "From Scratch",
        message: "Salut les gens"
    }),
    mode : "cors",
    credentials: "same-origin"
};
document.querySelector("form").addEventListener("submit", ()=>{
    fetch("http://localhost:3000/posts", init2).then(()=>
        console.log("data envoyée"));
})

//-----------------------
