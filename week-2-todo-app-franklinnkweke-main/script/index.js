
window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const newItem = document.querySelector('#newitem');
    let ul = document.querySelector('ul')
    const search = document.querySelector('#search');
    const searchIcon = document.querySelector('#searchIcon');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = newItem.value
        if (!task) {
            alert("Task cannot be empty, Please enter a valid task")
            return;
        }
        
        const lis = document.createElement('li')
        lis.classList.add('list')
        const editInput = document.createElement("input")
        editInput.classList.add('editText');
        editInput.type ="text"
        editInput.value = task;
        editInput.setAttribute('readonly','readonly');

        const action = document.createElement("span")
        action.classList.add('action')
        

        const btnEdit = document.createElement('span')
        btnEdit.classList.add('Edit');
        btnEdit.innerHTML = `<i class="fas fa-edit edit"></i>`
        const btnDel = document.createElement('span')
        btnDel.classList.add('del');
        btnDel.innerHTML =`<i class="fas fa-trash-alt dele"></i>`
        const date = document.createElement('span')
        date.classList.add('date')
        date.innerHTML = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`
        lis.appendChild(editInput);
        action.appendChild(btnEdit)
        action.appendChild(btnDel)
        action.appendChild(date);
       
        lis.appendChild(action);
        ul.appendChild(lis);

        newItem.value = "";

        btnEdit.addEventListener('click',()=>{
            if(btnEdit.innerHTML ===`<i class="fas fa-edit edit"></i>`){
                editInput.removeAttribute('readonly');
                editInput.focus();
                btnEdit.innerText="Save"
            }else{
                editInput.setAttribute("readonly","readonly");
                btnEdit.innerHTML = `<i class="fas fa-edit edit"></i>`;
                date.innerHTML = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
            }
        })

        btnDel.addEventListener('click',()=>{
            ul.removeChild(lis)
        })

        searchIcon.addEventListener("click",()=>{
            let content =  search.value.toLowerCase();
            let task_arr = document.querySelectorAll('ul');
            console.log(task_arr)
           
            task_arr.forEach(()=>{
                
                const found = editInput.value.toLowerCase().includes(content);
                console.log(found)
                lis.classList.toggle('display', !found)
            })
        })




        
    })

})


