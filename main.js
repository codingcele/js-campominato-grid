
const myContainer = document.getElementById("container");

function createBox() {
    const mioElement = document.createElement("div");
    mioElement.classList.add("box");
    mioElement.setAttribute("onclick","changeColor();");

    return mioElement;
}


for (let i = 0; i < 100; i++) {

    let nuovoElemento = createBox();

    myContainer.appendChild(nuovoElemento);

}

const boxes = document.getElementsByClassName('box');

for (let i = 0; i < 100; i++) {

    let nuovoNum = boxes[i];

    const element = `<div class="num">${i + 1}</div>`;
    nuovoNum.innerHTML += element;
    boxes[i].onclick = function(e) {
        e.target.style.backgroundColor= "blue";
    }

}




/* function changeColor() {
    let mioElement = 
    mioElement.classList.add("bk-blue");
}; */

/* const mioElement = document.getElementsByClassName("box");

mioElement.setAttribute('onclick', 'changeColor()');

function changeColor() {
    mioElement.classList.add("bk-blue");
}; */


/* let casella = document.getElementsByClassName('box');



casella.onclick = function() {
    casellat.classList.add("bk-blue");
};
 */





/* function createNum() {
    const mioNum = document.createElement("div");
    mioNum.classList.add("num");
    const contenitore = document.querySelector(".num");
    const element = `<div>${i}</div>`;
    contenitore.innerHTML += element;
    return mioNum;
}
 */








/* const contenitore = document.querySelector(".box");

for (let i = 1; i <= 100; i++) {

    const element = `<div class="box">${i}</div>`;
    contenitore.innerHTML += element;
        
} */

