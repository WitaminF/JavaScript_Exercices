//Classes

class Utilisateur {
    constructor(pseudo, ville) {

        this.pseudo = pseudo;
        this.ville = ville;
    }
    sayMyName = function (){
        console.log("Bonjour, je suis " + this.pseudo);
    }
}

