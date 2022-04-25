let output = document.getElementById("main-display");
let equalsTo = document.getElementById("equals");   
let newOutput = "";
function backSpace() {
    output.innerText = output.innerText.slice(0, -1);
}

equalsTo.addEventListener('click', () => {

    if (output.innerText.includes('.')) {
        output.innerText = (Number(output.innerText)).toFixed(4).toString()
    }else{
    }
    
});