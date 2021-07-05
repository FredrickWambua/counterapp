// document.getElementById("count-el").textContent = console.log(count);
// initializing a variable
let count = 0;
let saveEl = document.getElementById("save-el")
countEl = document.getElementById("count-el");
console.log(saveEl)

// increment function
function increment(){
    count = count +=1;
    countEl.textContent = count;
};

// save function
function save(){
    let theCount = count + " - "
    saveEl.textContent += theCount
}

function reset() {
    countEl.textContent = 0;
    count = 0;
}