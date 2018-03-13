function $id(id) {
    return document.getElementById(id);
}

function setInnerText(element, text) {
    if (element.innerText !== undefined) {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}

function getInnerText(element) {
    if (element.innerText !== undefined) {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

function getFirstElementChild(element) {
    var firstNode;
    if (element.firstElementChild) {
        firstNode = element.firstElementChild
    } else {
        firstNode = element.firstChild;
        while (firstNode && firstNode.nodeType != 1) {
            firstNode = firstNode.nextSibling;
        }
    }
    return firstNode;
}

function getLastElementChild(element) {
    var lastNode;
    if (element.lastElementChild) {
        lastNode = element.lastElementChild;
    } else {
        lastNode = element.lastChild;
        while (lastNode && lastNode.nodeType != 1) {
            lastNode = lastNode.previousSibling;
        }
    }
    return lastNode;
}



var container = $id("commens");
var txt = $id("txt");
var tip = document.createElement("div");
tip.className = "tip";

$id("btn").onclick = function() {

    if (txt.value == 0) {
        return;
    }
    var text = document.createElement("p");
    var text_value = setInnerText(text, txt.value);
    // text.className = "des";
    container.appendChild(text);
    txt.value = "";

}