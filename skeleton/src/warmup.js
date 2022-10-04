
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.hasChildNodes()){
        Array.from(htmlElement.children).forEach(element => {
            element.remove()
        });
    }
    let p = document.createElement("p");
    p.textContent = string;
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);