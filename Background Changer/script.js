const button = document.getElementById("btn");

button.addEventListener("click", () =>{
    document.body.style.background = randomBg();
});

function randomBg(){

    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
