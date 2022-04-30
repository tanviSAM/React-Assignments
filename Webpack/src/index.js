import { sum } from "./calc";

import ( "./index.css" );

const mySecretKey = "1234";
console.log(sum(1, 3, mySecretKey));

const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.classList.add("textColor");

root.appendChild(h1);