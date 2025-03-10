"use strict";
/*
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
*/

const countryName = document.getElementById("countryName");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputValue = countryName.value.trim();
    // https://restcountries.com/v3.1/name/{name}
    let data;
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
        data = await response.json();
    } catch (err) {
        console.log(err); 
        return;
    }
    if(data.)
    const result = data[0];
    const flag = result.flags.svg;
    const name = result.name.common;
    const capital = result.capital;

    const card = document.createElement("div");
    card.classList.add("card");
    const flagImg = document.createElement("img");
    flagImg.src = flag;
    const nameheader = document.createElement("h1");
    nameheader.innerText = name;
    const capitalP = document.createElement("p");
    capitalP.innerText = capital;
    document.getElementById("results").appendChild(card);
    card.append(nameheader, flagImg, capitalP);
})
