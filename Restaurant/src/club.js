export function newElement (element, classes) {
    let newDiv = document.createElement(element);
    newDiv.classList.add(classes);
    return newDiv;
}

export function newTextElement (element, classes, text) {
    const newDiv = document.createElement(element);
    newDiv.classList.add(classes);
    const newText = document.createTextNode(text);
    newDiv.appendChild(newText)
    return newDiv;
}

export function showClub () {
    // returns if the block is already created
    if (document.querySelector(".club")) {
        return;
    }
    // creates new nodes and appends the respective childs
    const content = document.querySelector('#content');
    const clubDiv = newElement("div", "club");
    content.appendChild(clubDiv)
    const textDiv = newElement("div", "text");
    const clubImg = document.createElement("img")
    clubImg.src = "https://images.unsplash.com/photo-1560035285-64808ba47bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80";
    clubImg.id = "club-img";
    clubDiv.append(textDiv, clubImg);
    const clubHead = newTextElement("h1", "club-head", "The CLUB");
    const firstH2 = newTextElement("h2", "club-subhead", "Learn to Cook");
    const p1 = newTextElement("p", "club-text", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, a.");
    const secondH2 = newTextElement("h2", "club-subhead", "Create a community");
    const p2 = newTextElement("p", "club-text", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, harum voluptas ea neque iure explicabo.");
    const thirdH2 = newTextElement("h2", "club-subhead", "Take your Lasagnas home");
    const p3 = newTextElement("p", "club-text", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae consectetur itaque illum id maxime voluptate.")
    textDiv.append(clubHead, firstH2, p1, secondH2, p2, thirdH2, p3);
}