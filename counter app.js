let count=0;
countEl=document.getElementById("count-el");
saveEl=document.getElementById("save-el");
function increment() {
    count+=1;
    countEl.textContent=count;
}

function save(){
    let countStr = count + "-";
    saveEl.textContent+=countStr;
    countEl.textContent=0;
    count=0;
}