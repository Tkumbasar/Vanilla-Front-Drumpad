

let keyBoard = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"]; /// je crée un tableau 
let key = document.querySelectorAll(".key");// je selection toute les touches
let audio = document.querySelectorAll("audio"); // je selection
console.log(audio);

for (let i = 0; i < 9; i++) {
    document.addEventListener("keydown", element);

    function element(code) {
        if (code.key === keyBoard[i]) {
            key[i].classList.add("playing");
            audio[i].play();
        }
    }

    document.addEventListener("keyup", stopMusic);

    function stopMusic() {
        key[i].classList.remove("playing");
    }
}