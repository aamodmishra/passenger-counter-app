document.getElementById("count-el").innerText="lets start counting"
 
let count=0
let saveEl=document.getElementById("save-el")

let countEl =document.getElementById("count-el")

console.log(countEL); //this gives the html element that has class name called countEl

function increment()
{
    count+=1
    
    countEl.innerText=count
}
function save()
{ 
    let countStr=count+" + "
    saveEl.innerHTML+=countStr
    console.log(count)
    countEl.innerText=0
    count=0
    console.log(count)    
}

