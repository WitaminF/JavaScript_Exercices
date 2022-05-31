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
//Asynchrone
//Executer du code en attendant le résultat

/*
setTimeout(()=> {
    console.log("test")
}, 2000);
*/

/*
//Promise, après le then le code sera executer uniquement quand on aura un retour de fetch
fetch("monline").then((res) => res)

//Async/await
async function fetchData(){
    await fetch("monlien")
    //attend que await soit executé avant de faire la suite
    //On peut en mettre plusieurs à la suite
    await executeFunction()
};

//Fonction fléchée, toujours avec le paramètre
const fetchData2 = async() => {
    await ..
    await ..
}
*/

//------------------
//LE JSON
//----------------

// Méhthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête

fetch("data.json")
    .then((res) => res.json())
    .then ((data) => {
        //Stringify => converti en json
        let settings = JSON.stringify(data);
        //Parse => transforme json en objet JS
        //console.log(JSON.parse(settings));
    });

//-----------------------
//Web API
//-----------------------
//CLIENT STORAGE
//-----------------------

//Local storage
//Il faut passer des chaines de caractères
//localStorage.data = "Je stock la data dans ma boite";
localStorage.removeItem("data")
document.body.textContent = localStorage.data;

const obj = {
    name: "Denis",
    age: 22,
};

localStorage.user = JSON.stringify(obj);
//document.body.textContent = localStorage.user;
//console.log(JSON.parse(localStorage.user));

//-------------------
//Session Storage
sessionStorage.dataSettings = "55px";
sessionStorage.clear();

//----------------
//Cookies
//Rest le temps de la session
document.cookie = "username=Florent"

//Bonne pratique pour les cookies
document.cookie = "pseudo=FS; path=/; max-age=4500000; secure; samesite";
















