function test() {
    let randomNr = Math.floor(Math.random() * 101);
    let joueur;

    do{
        joueur = prompt("Trouver le nombre entre 1 et 100");
        console.log(joueur, randomNr);

        if (randomNr > joueur)  {
            console.log("Trop petit");
        } else if (randomNr < joueur)   {
            console.log("Trop grand");
        }
    } while (joueur != randomNr);
}

test();