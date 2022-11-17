
const myContainer = document.getElementById("container");

function createBox() {
    const mioElement = document.createElement("div");
    mioElement.classList.add("box");
    mioElement.setAttribute("onclick","changeColor()");

    return mioElement;
}

document.getElementById("play").addEventListener("click", function() {
    myContainer.innerHTML = "";
    for (let i = 0; i < 100; i++) {

        let nuovoElemento = createBox();
    
        myContainer.appendChild(nuovoElemento);
    
    }
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < 100; i++) {

        let nuovoNum = boxes[i];

        const element = `<div class="num">${i + 1}</div>`;
        nuovoNum.innerHTML += element;
        let toggle = boxes[i];
        toggle.onclick = function() {
            toggle.classList.toggle("bk-blue");
    }

}
});





