document.getElementById("count-el").innerText="lets start counting"
 
let count=0
let countEL =document.getElementById("count-el")
console.log(countEL); //this gives the html element that has class name called countEl

function increment()
{
    count=count+1
    
    countEL.innerText=count
}