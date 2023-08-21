const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")
const prev = document.getElementById("prev")
const next =document.getElementById("next")

let currentActive =1;


next.addEventListener("click",()=>{
    currentActive++;
    if(currentActive > circles.lenght){
        //currentActive circle.lenght e eşit olana kadar next devam edecek
        currentActive = circles.length
    }
    update();
})

prev.addEventListener("click",()=>{
    currentActive--;
    if(currentActive < 1){
        //currentActive 1 oluncaya kadar prev devam edecek
        currentActive =1;
    }
    update ();
});


function update (){
    circles.forEach((circle,index)=>{
        if(index < currentActive){
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active");

        if(currentActive ===1){
            prev.disabled=true;
        } else if (currentActive ===circles.lenght){
            next.disabled =true;
        }else {
            prev.disabled =false;
            next.disabled =false
        }

}
