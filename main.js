// document.getElementById("count-el").innerText = console.log(count);
// initializing a variable
let count = 0;

// assingning a variable to the HTML id
countEl = document.getElementById("count-el");

// increment function
function increment(){
    count = count +=1;
    countEl.innerText = count;
};

// save function
function save(){
    console.log(count)
}

function reset() {
    countEl.innerText = 0;
}