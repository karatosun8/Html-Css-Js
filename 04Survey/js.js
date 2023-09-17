
const correctAnswer = ["E","E","E","E"] // 4 adet soru olduğu için 4 adet valuesi "E" olan cevap için dizi oluşturduk 

const form =document.querySelector(".question-form");
const result =document.querySelector(".result")


//Form submit olduğunda
form.addEventListener("submit",e =>{
    e.preventDefault();

    let score=0;
    // q1,q2,q3,q4 input daki name in değeridir ve kullanıcının verdiği cevapları dizi oluşturduk
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,]

    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswer[index])
        {
            score += 25;
        }
    })

    // console.log(score);
    result.classList.remove("d-none")

    let puan =0;
    const bastır=setInterval(()=>{
        result.querySelector("span").textContent = `${puan} %`
        if(puan == score)
        {
            clearInterval(bastır)
        }
        else
        {
            puan ++;
        }
    },10)
    
})

