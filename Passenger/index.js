
let countEl= document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);
let count=0;

function increment() {
    //body of the fucntion for execution 
    console.log("clicked");
    count+=1;
    countEl.textContent=count;
    console.log(count);
}

function save(){
    let newSave=" "+count + " - ";
    saveEl.textContent+=newSave;
    console.log(newSave);
    countEl.textContent=0;
    count=0;
}

