const el = document.querySelector(".maclasse");
const paragraphs = document.querySelectorAll("p");

function inn() {
    document.getElementById("p1").innerHTML = "ali is here";
}
function setatt() {
    const h1 = document.getElementById("myH1");
    if (h1) {
        h1.setAttribute("class", "democlass");
        h1.style.color = "blue";
    }
}

function addNewItem() {
    const list = document.getElementById("myList");
    if (list) {
        const newItem = document.createElement("li");
        newItem.textContent = "New Item " + (list.children.length + 1);
        list.appendChild(newItem);
    }
}

function removeLastItem() {
    const list = document.getElementById("myList");
    if (list && list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}
