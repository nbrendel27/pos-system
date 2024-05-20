
import { cakes } from "./cakes.js";


const page = document.querySelector("#shopping-screen");




document.addEventListener("DOMContentLoaded", () => {
    cakes.forEach((cake) => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const textContainer = document.createElement("div");
        const name = document.createElement("h2");
        const description = document.createElement("p");
        const price = document.createElement("p");
        const button = document.createElement("button");

        name.textContent = cake.name;
        description.textContent = cake.description;
        price.textContent = "$" + cake.price;
        button.textContent = "Shop";

        textContainer.append(name, price, description, button);
        card.append(img, textContainer);
        page.append(card);
    });
})