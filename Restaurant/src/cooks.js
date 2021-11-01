import {newElement, newTextElement} from './club'

export function showCooks () {
    const content = document.querySelector('#content');
    const cooksDiv = newElement("div", "cooks");
    content.appendChild(cooksDiv);
    const h1 = document.createElement("h1")
    h1.innerHTML = "Meet our Kitchen Team";
    const cookContainer = newElement("div", "cook-container")
    cooksDiv.append(h1, cookContainer);
    cookContainer.innerHTML = `
    <div class="cooks-flex">
        <img class="cook" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=325&q=80" alt="">
        <div class="cook-text">
            <h2>Mathias JK</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>
        </div>
    </div>
    <div class="cooks-flex">
        <img class="cook" src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" alt="">
        <div class="cook-text">
            <h2>Akira Arusaki</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>
        </div>
    </div>
    <div class="cooks-flex">
        <img class="cook" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
        <div class="cook-text">
            <h2>Anita Npembe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas dicta!</p>
        </div>
    </div>`
}