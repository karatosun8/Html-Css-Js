const addForm = document.querySelector(".add");
const list =document.querySelector(".todos");


const generateTemplate = (todo)=>{
    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center"> <span>${todo}</span>
    <i class="fa-regular fa-trash-can delete"></i></li>
    `;
    list.innerHTML +=html
}

addForm.addEventListener("submit",e=>{
    e.preventDefault();
    const todo =addForm.add.value.trim();
    // console.log(todo);
    //Boş veri girmeyi engellemek için if() yazdık.
    // if(todo.lenght > 0) veya aşağıdaki kod
    if(todo.length)
    {
        generateTemplate(todo);
        addForm.reset() //Yazılanların formadan silinmesi için
    }

    
})