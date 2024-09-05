const domHex = document.getElementById("hex");
const domPalette = document.getElementById("palette");
const domResult = document.getElementById("result");;

onload = () => {
    newRound();
}

function newRound(){
    let roundHex = randomHexCode();
    let randomCorrect = Math.floor(Math.random() * 10);

    domHex.textContent = roundHex;
    domPalette.innerHTML = "";

    for(var i = 0; i <= 9; i++){
        let option = document.createElement("span");
        if(randomCorrect == i){
            option.onclick = () => {
                domResult.innerText = "You nailed it!";
                newRound();
            };
            randomColor = roundHex;
        } else {
            randomColor = randomHexCode();

            while(randomColor == roundHex){
                randomColor = randomHexCode();
            }
            option.onclick = () => {
                domResult.innerText = "Wrong one!";
            };
        }
        option.style.backgroundColor = randomColor;
        option.classList.add("color");

        domPalette.appendChild(option);
    }
}

function randomHexCode(){
    let hex = '#';
    values = '0123456789ABCDEF';
    for (i = 0; i < 6; i++){
        hex += values[Math.floor(Math.random() * 16)];
    };
    return hex;
}