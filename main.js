

let toucheClavier = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"]; /// je crée un tableau dans laquel je vais incrémenter mais touche
let divs = document.querySelectorAll(".key");// je selection toute les touches de mon pad
let audio = document.querySelectorAll("audio"); // je selection  tout les audio
console.log(audio);

for (let i = 0; i < 9; i++) { // je crée une boucle dans lequel a chaque fois  que je touches les touche du clavier 
    document.addEventListener("keydown", element); // écouteur sur ma fonction 
    console.log(i);

    function element(touchePad) {   // je crée une fonction dans la quel j'appelle les touches de mon tableau 
        if (touchePad.key === toucheClavier[i]) {
            divs[i].classList.add("playing");//je rajout l'animations a la touche saisie
            audio[i].play(); //je lance la music
        }
    }
    console.log([i]);
    document.addEventListener("keyup", stopMusic);

    function stopMusic() { // fonction qui stop la boucle de la  music au moment de levé de touche 
        divs[i].classList.remove("playing");
    }
}

