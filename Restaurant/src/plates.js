import {newElement} from './club'


export function showPlates () {
    const content = document.querySelector("#content");
    const platesDiv = newElement("div", "plates");
    content.appendChild(platesDiv);

    const h1 = document.createElement("h1")
    h1.innerHTML = "Our Menu"

    const platesFlex = newElement("div", "plates-flex")
    platesFlex.innerHTML = `
    <div class="startes-plates">
        <h2>STARTERS</h2>
        <h3>Garlic Bread</h3>
        <p>Lorem ipsum dolor consectetur adipisicing.</p><span>$9.75</span>
        <h3>Parmeggiana</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>
        <h3>Arancini</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p><span>$9.75</span>
    </div>
    <div class="main-plates">
        <h2>LASAGNAS</h2>
        <h3>Classic Lasagna</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>
        <h3>Eggplant Las</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>
        <h3>The Vegan One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p><span>$9.75</span>
    </div>`
    platesDiv.append(h1, platesFlex)
}