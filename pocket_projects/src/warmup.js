
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    let p = Document.createElement("p");
    p.textContent(string);
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);