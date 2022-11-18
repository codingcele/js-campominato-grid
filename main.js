
const myContainer = document.getElementById("container");

function createBox() {
    const mioElement = document.createElement("div");
    mioElement.classList.add("box");
    mioElement.setAttribute("onclick","changeColor()");

    return mioElement;
}

function myFunction() {
    for (let i = 0; i < 100; i++) {

        let nuovoElemento = createBox();
    
        myContainer.appendChild(nuovoElemento);
    
    }
    const boxes = document.getElementsByClassName('box');

    let clicked = [];

    for (let i = 0; i < 100; i++) {

        let nuovoNum = boxes[i];

        const element = `<div class="num">${i + 1}</div>`;
        nuovoNum.innerHTML += element;
        let add = boxes[i];
        add.onclick = function() {
            add.classList.add("bk-blue");
            if (!clicked.includes(i + 1)) {
                clicked.push(i + 1);
                console.log(clicked);
                console.log(i + 1);
            }
        }
    }
}

document.getElementById("play").addEventListener("click", function() {
    myContainer.innerHTML = "";
    setTimeout(myFunction, 500);
});





