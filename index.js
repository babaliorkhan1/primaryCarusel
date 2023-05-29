const btn1=document.querySelector("button:first-child")
const btn2=document.querySelector("button:last-child")
const slides=document.querySelector(".slides")

let leftvalue=0
let slidesLenght=slides.children.length

btn1.addEventListener("click",()=>{
   if (leftvalue==0) {
    leftvalue=-(slidesLenght-1)*100
   }
   else{
    leftvalue+=100
   }
   slides.style.left=leftvalue+"px"
})

btn2.addEventListener("click",()=>{
    if (leftvalue==-(slidesLenght-1)*100) {
        leftvalue=0
    }
    else{
        leftvalue-=100
    }
    slides.style.left=leftvalue+"px"
})