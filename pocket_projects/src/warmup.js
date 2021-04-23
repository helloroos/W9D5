
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    const children = htmlElement.children;
    if (children.length > 0) {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.lastChild);
        }
    }
    
    let p = document.createElement("p");
    p.textContent += string;
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);

