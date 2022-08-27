if(!localStorage.getItem('tasks'))
{
    localStorage.setItem('tasks',JSON.stringify([]))
}
document.addEventListener('DOMContentLoaded', ()=>{
    //  Init UL from localtorage
    let ul1 = document.querySelector('ul')
    let tasksList = JSON.parse(localStorage.getItem('tasks'))
    console.log(typeof tasksList)
    // loop
    for(let i =0; i<tasksList.length; i++)
    {
        let li = document.createElement('li')
        li.innerHTML = tasksList[i];
        ul1.append(li)
    }
    //  DOM Loaded Completely
    let form = document.querySelector('form')
    let submit  = document.getElementById('submit')
    let taskInput = document.getElementById('task_name')
    submit.disabled = true;
    //  listening on input changes or keyboard
    taskInput.onkeyup = ()=>{
        submit.disabled = taskInput.value.length < 3
        // if(taskInput.value.length < 3)
        //     submit.disabled = true;
        // else
        //     submit.disabled = false;
    }
    form.onsubmit = ()=>{
        let taskName = document.getElementById('task_name').value
        let ul = document.querySelector('ul');
        const li = document.createElement('li')
        li.innerHTML = taskName;
        console.log(li)

        ul.append(li)
        tasksList.push(taskName)
        //  save to local storage
        localStorage.setItem('tasks', JSON.stringify(tasksList))
        document.getElementById('task_name').value = ""
        return false;
    }
})