'use strict';

const container = document.getElementById("container");
const button = document.createElement("button");
button.innerText = "Show Photo!";
container.appendChild(button);
const img = document.createElement("img");
img.style.width = "150px";


button.addEventListener("click", async function getAPIData(){
    const result = await fetch("https://coffee.alexflipnote.dev/random.json");
    const data = await result.json();
    console.log(data);
    img.src = data.file;
    img.alt = "Coffee Photo";
    container.appendChild(img);
})
