const addForm = document.querySelector(".add");
const list =document.querySelector(".todos");
const search =document.querySelector(".search input")


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

//Delete işlemi
list.addEventListener("click",e=>{
    if(e.target.classList.contains("delete"))
    {
        e.target.parentElement.remove()
    }
})

const filterTodos = (term)=>{
    // console.log(term);
    // console.log(list.children);
    // //Html Collectionda forEach Kullanamadığımız için Arra.from ile işlem yaptık
    // console.log(Array.from(list.children));
    Array.from(list.children)
    .filter (todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"))
    Array.from(list.children)
    .filter (todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"))
}
//search işlemi
//Klavyede her harf girişinde arama yapması için keyup eventini kullandık
search.addEventListener("keyup",()=>{
    const term =search.value.trim().toLowerCase()
    // console.log(term);
    filterTodos(term)

})